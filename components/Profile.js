const Profile = {
    template: `
    <div>
        <h3> This is your Profile component </h3>
        <h4> Hello {{ $route.params.user}} </h4>
        <router-view> </router-view>
    </div>
    `
}

export default Profile