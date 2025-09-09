document.getElementById("navBarLoad").innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark navbar-gradient fixed-top">
        <div class="container">
            <a class="navbar-brand logo" href="index.html">
                <i class="fas fa-gem"></i>
                Arrack කඩේ
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav2">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav2">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#product">Product</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="btn btn-outline-light ms-2" href="cart.html">Cart</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
`