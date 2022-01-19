export default function({ $axios, redirect, $cookies }) {
    const getAccessToken = () => {
        return $cookies.get("userAccessToken");
    };

    const setToken = (token) => {
        $cookies.set('userAccessToken', token.access)
    }

    const getRefreshToken = () => {
        return $cookies.get('userRefreshToken')
    }
    const clearToken = () => {
        $cookies.remove('userAccessToken')
        $cookies.remove('userRefreshToken')
    }

    // 
    $axios.onRequest(config => {
        const token = getAccessToken();
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
    });

    $axios.onError(error => {
        console.log(error.config.url)
        const originalRequest = error.config;
        if (
            error.response.status == 401 &&
            originalRequest.url === "accounts/refresh/"
        ) {
            clearToken();
            redirect('/login');

            return Promise.reject(error);
        }

        if (error.response.status == 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const formData = new FormData()
            formData.append('refresh', getRefreshToken())

            return $axios.post("accounts/refresh/", formData, { "Content-Type": "multipart/form-data" })
                .then(res => {
                    if (res.status === 200) {
                        setToken(res.data);
                        $axios.defaults.headers.common["Authorization"] =
                            "Bearer " + getAccessToken();
                        return $axios(originalRequest);
                    }
                });
        }
        return Promise.reject(error);
    });
}