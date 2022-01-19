export default function({ app, redirect }) {
    // if user logged in with data redirect him to home page
    const accToken = app.$cookies.get("userAccessToken");
    const refToken = app.$cookies.get('userRefreshToken')
    if (accToken && refToken) {
        return redirect("/");
    }
}