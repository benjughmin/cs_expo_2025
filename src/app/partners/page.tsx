import Navbar from '@/components/global/nav-bar';
import Footer from '@/components/global/footer';
import Hero from '@/components/partners/Hero';
import PartnersCarousel from '@/components/partners/PartnersCarousel';
import { mediaPartners, majorPartners, minorPartners } from './data/partnersData';

function PartnersPage() {
    return(
        <div className="min-h-screen bg-[rgba(15,0,25,1)] relative overflow-hidden">
            {/* Content wrapper */}
            <div className="relative z-10">
                {/* Navbar */}
                <Navbar />

                {/* Hero Component */}
                <Hero
                    title="OUR PARTNERS"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas enim neque, lobortis quis massa sit amet, convallis tincidunt enim."
                />

                {/* Media Partners Carousel */}
                <PartnersCarousel 
                    title="MEDIA PARTNERS"
                    partners={mediaPartners}
                    accentColor="#FF00DC"
                    titleGradient="linear-gradient(180deg, #FFFFFF 40%, #FF37E3 60%)"
                />

                {/* Major Partners Carousel */}
                <PartnersCarousel 
                    title="MAJOR PARTNERS"
                    partners={majorPartners}
                    accentColor="#5C0BDE"
                    titleGradient="linear-gradient(180deg, #FFFFFF 40%, #5C0BDE 60%)"
                />

                {/* Minor Partners Carousel */}
                <PartnersCarousel 
                    title="MINOR PARTNERS"
                    partners={minorPartners}
                    accentColor="#FF6B00"
                    titleGradient="linear-gradient(180deg, #FFFFFF 40%, #FF6B00 60%)"
                />

                {/* Footer */}
                <Footer />
            </div>
        </div>
    )
}

export default PartnersPage;