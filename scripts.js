document.addEventListener("DOMContentLoaded", () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Physiotherapy",
        "name": "Fysioterapeut Lene Sandal",
        "image": "https://lenesandal.dk/img/lene-sandal-logo.png",
        "description": "Specialklinik for holistisk behandling af kæbesmerter, hovedpine, svimmelhed og andre følgesymptomer i krop og sind.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Maglehøjvej 40",
            "addressLocality": "Frederikssund",
            "postalCode": "3600",
            "addressCountry": "DK"
        },
        "telephone": "+45 42423534",
        "email": "kontakt@lenesandal.dk",
        "url": "https://lenesandal.dk",
        "openingHours": [
            "Ma-Fr 09:00-17:00",
            "Lø 10:00-14:00"
        ],
        "priceRange": "$$",
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 55.8471,
            "longitude": 12.0761
        },
        "sameAs": [
            "https://www.facebook.com/lenesandal.dk"
        ]
    };

    // Create a <script> tag
    const scriptTag = document.createElement("script");
    scriptTag.type = "application/ld+json";
    scriptTag.textContent = JSON.stringify(structuredData);

    // Append the <script> tag to the <head> section
    document.head.appendChild(scriptTag);
});
