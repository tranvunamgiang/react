export default function Header(){
    return(
        <div id="header">
   
        <nav class="navbar navbar-light navbar-expand-lg shadow navbar-custom bg-custom mb-4 fixed-top" id="navbar">
            <div class="container-fluid">
                <a class="navbar-brand fw-bold" href="homepage.html">PANCAKE</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbarExample-expand-lg" aria-controls="offcanvasNavbarExample-expand-lg">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="homepage.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="au-bou.html">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="STORE.html">Store</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="Hiring.html">Hiring</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="contact.html">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div class="order-3 d-none d-lg-flex justify-content-end">
                    <a href="booking.html" class="btn btn-custom">BOOK NOW</a>
                </div>
                <div class="offcanvas offcanvas-start bg-custom" tabindex="-1" id="offcanvasNavbarExample-expand-lg"
                    aria-labelledby="offcanvasNavbarExample-expand-lg">
                    <div class="offcanvas-header">
                        <h3 class="offcanvas-title" id="offcanvasLabel" style={{color:"black"}}>LINKS</h3>
                    </div>
                    <div class="offcanvas-body bg-custom">
                        <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                            <li class="nav-item">
                                <a class="nav-link" href="homepage.html">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="au-bou.html">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="STORE.html">Store</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="Hiring.html">Hiring</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="contact.html">Contact Us</a>
                            </li>
                            <li class="nav-item d-lg-none">
                                <a href="/index.html" class="btn btn-custom w-100">BOOK NOW</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>     
    </div>

    );
}