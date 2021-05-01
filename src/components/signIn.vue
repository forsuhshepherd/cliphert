<template>
    <div id="signin">
        <div class="content">
            <ul class="content-header">
                <li><a href="#">Sign in</a></li>
                <li><a href="#">Sign up</a></li>
            </ul>
            <div class="signin">
                <form action="" method="post">
                    <div class="">
                        <input type="text" name="username" placeholder="Username" id="username" class="form-input">
                    </div>
                    <div class="form-control">
                        <input type="password" name="password" placeholder="Password" id="password" class="form-input">
                    </div>
                    <button type="checkbox">Remember me</button>
                    <a href="#">Forgot Password?</a>
                    <input type="submit" value="" placeholder="SIGN IN">
                </form>
                <div class="go-to-signup">Have an Account</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    #signin {
        padding: 150px 0;
    }
    .content {
        margin: auto;
        width: 50%;
        min-width: 25%;
        height: auto;
        min-height: 8vh;
        border: 1px solid lighten(#494d55, 10%);
        
        .content-header {
            position: relative;
            width: 100%;
            display: flex;
            justify-content:space-around;
            list-style-type: none;
            border-bottom: 1px solid lighten(#494d55, 10%);
            li {
                padding: 15px 0;
                &:first-child {
                    border-right: 1px solid lighten(#494d55, 10%);
                }
                a {
                    font-size: 16px;
                    color: rgb(17, 16, 16);
                }
            }
        }

    }
</style>