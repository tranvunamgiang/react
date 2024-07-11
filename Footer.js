export default function Footer(){
    return(
        <footer class="mt-5 bg-custom">
        <div class="container">
            <div class="row py-5">
                <div class="col-4 d-flex flex-column align-items-end justify-content-center text-end">
                    <h2 class="text-uppercase">
                        join our<br />mailing list
                    </h2>
                </div>
                <div class="col-8 d-flex align-items-center pr-3">
                    <form class="w-75">
                        <div class="input-group">
                            <input type="email" class="form-control text-uppercase no-border" placeholder="your email address" aria-label="Email Address" />
                            <button class="btn btn-custom text-uppercase no-border ms-2" type="submit">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-6 d-flex flex-column align-items-center"> 
                    <p class="lead text-uppercase">connect</p>
                    <div class="social-links">
                        <a href="/index.html" class="social-link">
                            <img src="assets/contactus/instagram.svg" alt="Instagram" />
                            <span class="social-text">Instagram</span>
                        </a>
                        <a href="/index.html" class="social-link">
                            <img src="assets/contactus/facebook.svg" alt="Facebook" />
                            <span class="social-text">Facebook</span>
                        </a>
                        <a href="/index.html" class="social-link">
                            <img src="assets/contactus/twitter.svg" alt="Twitter" />
                            <span class="social-text">Twitter</span>
                        </a>
                        <a href="/index.html" class="social-link">
                            <img src="assets/contactus/youtube.svg" alt="YouTube" />
                            <span class="social-text">YouTube</span>
                        </a>
                    </div>
                </div>
                <div class="col-6 d-flex flex-column align-items-center"> 
                    <p class="lead text-uppercase">more about us</p>
                    <div class="social-links">
                        <a href="/index.html" class="social-link">
                            <i class="bi bi-question-circle-fill"></i>
                            <span class="social-text">FAQ'S</span>
                        </a>
                        <a href="/index.html" class="social-link">
                            <i class="bi bi-info-circle-fill"></i>
                            <span class="social-text text-uppercase">about us</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="bot2">
            <div class="bot2.1">
                <div class="bot2.1.1">
                    <span><h4>LOCATIONS</h4><hr /></span>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                            <span><a href="/index.html">BOSTON</a></span>

                        </div>
                        <div class="col-md-3">
                            <span><a href="/index.html">CHICAGO</a></span>
                        </div>
                        <div class="col-md-3">
                            <span><a href="/index.html">NEW YORK FLATRITON</a></span>
                        </div>
                        <div class="col-md-3">
                            <span><a href="/index.html">NEW YORK MIDTOWN</a></span>
                        </div>
                       
                    </div>
                    <div class="row">
                        <div class="col-md-3">
                            <span><a href="/index.html">SAN FRANCISCO</a></span>
                        </div>
                        <div class="col-md-3">
                            <span><a href="/index.html">SEATLE</a></span>
                        </div>
                        <div class="col-md-3">
                            <span><a href="/index.html">TORONTO</a></span>
                        </div>
                        <div class="col-md-3">
                            <span><a href="/index.html">WASHINGTON DC</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    );
}