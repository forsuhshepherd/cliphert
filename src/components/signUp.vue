<template>
    <div id="sign-up">
        <div class="content-form-signup">
            <header class="content-form-header">
                <h4>Sign Up</h4>
            </header>
            <div class="content-form-body">
                <div>
                    <form action="" method="post">
                        <div class="form-group">
                            <input type="text" class="form-control" name="first-name" placeholder="First name" id="first-name">
                        </div>

                        <div class="form-group">
                            <input type="text" class="form-control" name="last-name" placeholder="Last name" id="last-name">
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" name="email" placeholder="Email" id="email">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" name="username" placeholder="Username" id="username">
                        </div>
                        
                        <div class="form-group">
                            <input type="password" class="form-control" name="password" placeholder="Password" id="password">
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" name="confirm-password" placeholder="Confirm Password" id="confirm-password">
                        </div>

                        <div class="pt-3 form-group">
                            <input type="submit" value="Sign Up" class="form-control btn btn-secondary" >
                        </div>
                    </form>
                    <div class="p-3 form-text">Already have an Account?<router-link to='/accounts/sign-in'> Sign In </router-link></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">

</style> 