<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                user: {}
            }
        },

        methods: {
            getAccessToken() {
                const url = window.location.href ;
                console.log("Created", url);
                const params = url.split("&");
                console.log(params);

                params.map((param) => {
                    if (param.includes('access_token')) {
                        const t = param.split('=');
                        const accessToken = t[1];
                        this.getUserInfo(accessToken);
                    }
                })
            },

            getUserInfo(accessToken) {
                console.log('getUserInfo')
                const url = 'https://www.googleapis.com/oauth2/v2/userinfo?access_token=' + accessToken;
                axios.get(url)
                        .then((res) => {
                            const data = res.data;
                            this.user = {
                                cookieVal: Math.floor(Math.random() * 10000000 * Date.now()).toString(16),
                                firstName: data.given_name,
                                lastName: data.family_name,
                                username: data.email,
                                photo: data.picture
                            };

                            this.setCookie('zepp', this.user.cookieVal, 365);
                            this.postUser();
                        })
                        .catch((err) => {
                            console.log(err);
                        });
            },

            postUser() {
                axios.post('http://locahost:3000/api/users',{
                    username: this.user.username,
                    token: this.user.cookieVal
                })
                .then((res) => {
                    console.log('Post OK. Response:', res);
                })
                .catch((err) => {
                    console.log('Post error: ', err);
                })
            },

            setCookie(cname, cvalue, exdays) {
                console.log('Set cookie');
                var d = new Date();
                d.setTime(d.getTime() + (exdays*24*60*60*1000));
                var expires = "expires="+ d.toUTCString();
                document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
            }
        },

        created() {
            console.log("Callback!")
            this.getAccessToken();
        }
    }
</script>