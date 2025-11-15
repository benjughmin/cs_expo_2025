import Navbar from '@/components/global/nav-bar';
import Footer from '@/components/global/footer';
import Hero from '@/components/events/Hero';

function PartnersPage() {
    return(
        <div className="min-h-screen bg-[rgba(15,0,25,1)] relative overflow-hidden">
            {/* Content wrapper */}
            <div className="relative z-10">
                {/* Navbar */}
                <Navbar />

                {/* Hero Component */}
                <Hero
                    title='OUR PARTNERS'
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas enim neque, lobortis quis massa sit amet, convallis tincidunt enim."
                    variant="expo"
                />

                {/* Footer */}
                <Footer />
            </div>
        </div>
    )
}

export default PartnersPage;