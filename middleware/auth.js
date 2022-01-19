export default function({ app, redirect }) {
    const accToken = app.$cookies.get("userAccessToken");
    const refToken = app.$cookies.get("userRefreshToken");
    if (accToken == undefined && refToken == undefined) {
        return redirect("/login");
    }
}