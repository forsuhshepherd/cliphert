<template>
    <header id="header" class="header">
        <!--<div class="topping">
            <div class="top top1"></div>
            <div class="top top2"></div>
            <div class="top top3"></div>
        </div>-->
        <div class="container">
            <h1 class="logo">
                <router-link to="/home" class="navbar-brand nav-logo" exact>
                    <span class="logo-icon-wrapper"><img class="logo-icon" src="" alt="icon"></span>
                    <span class="text"><span class="highlight">CLIPHERT</span></span>
                </router-link>
            </h1><!-- Logo -->
            <nav class="main-nav navbar-expand-md float-right navbar-inverse" role="navigation">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse">
                    <span class="sr-only"> Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button><!-- Nav toggler -->

                <div id="navbar-collapse" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <li class="nav-item"><router-link to="/" class="nav-link active" exact><i class="fas fa-tachometer-alt"></i> Categories</router-link></li>
                        <li class="nav-item"><a href="#" class="nav-link"><i class="fas "></i> How To Buy</a>
                        </li>
                        <li class="nav-item"><a href="#" class="nav-link"><i class="fas "></i>How To Sell</a>
                        </li>
                        <li class="nav-item"><router-link to="/sign-in" class="nav-link" exact><i class="fas fa-user"></i> Sign In</router-link></li>
                        <li class="nav-item"><router-link to="/sign-up" class="nav-link" exact><i class="fas fa-user-plus"></i> Sign Up</router-link></li>
                        <li><span href="#" class="nav-link"><i class="fas fa-cart"></i>Cart</span></li>
                    </ul><!-- nav -->
                </div><!-- navbar-collapse -->
                <!--<div class="extras"><a href="#" class="">Lang</a>
                    <ul class="dropdown-menu">
                        <li><a href="#">en</a></li>
                        <li><a href="">fr</a></li>
                    </ul>
                </div>--><!-- language selector -->
            </nav><!-- main-nav -->
        </div><!-- container -->
        <div class="clearfix"></div>
    </header><!-- header -->
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .header {
        min-height: 10vh !important;
    }
    
    .navbar a {
        color: #000;
    }

    /*.navbar-brand {
        padding: 25px;
        text-decoration-line: none;
    }*/

    .nav-link {
        font-weight:600;
        letter-spacing: 0.05em;
    }
    

    .topping {
        position: absolute;
        top: 0;
        width: 100%;
        min-height: 5vh;
        display: flex;
        flex-wrap: nowrap;
        padding: 0;
        margin: 0;
    }

    .top {
        width: 33.33%;
        border-bottom: 0.1px solid #fff;
        padding: 0;
        margin-bottom: 30px;
    }
    .top1 {
        box-shadow: 0px 6px 6px rgb(245, 183, 212);
    }
    .top2 {
        box-shadow: 0px 6px 6px rgb(111, 111, 233);
    }
    .top3 {
        box-shadow: 0px 6px 6px rgb(245, 188, 215);
    }


</style>