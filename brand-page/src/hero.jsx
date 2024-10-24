export default function HeroSection() {
    return (
        <main className="hero container">
            <div className="hero-container">
                <h1>YOUR FEED DESERVED THE BEST</h1>
                <p>We support the personal and professional wellbeing of NIKE .employees from
                    manufacturing to corporate through a range of programs and partnerships</p>

                <div className="hero-btn">
                    <button>Shop Now </button>
                    <button className="secondary-btn">Category</button>
                </div>

                <div className="shopping">
                    <p>Also available on</p>
                    <div className="brand-icons">
                        <img src="/image/amazon.png" alt="#" />
                        <img src="/image/filipkart.png" alt="#" />
                    </div>
                </div>
            </div>

            <div className="hero-img">
                <img src="/image/nikeshoes.webp" alt="#" />
            </div>
        </main>
    );
}