import hotelAbuja from "../public/hotels/hotel-abuja.png";
import hotelAbuja2 from "../public/hotels/hotel-abuja2.png";
import hotelLagos from "../public/hotels/hotel-lagos.png";

export const caseStudies = [
    {
        id: "new-hotel-development-abuja",
        title: "New Hotel Development – Abuja",
        image: hotelAbuja,
        location: "Abuja, Nigeria",
        projectType: "Technology Design & Pre-Construction Consulting",
        projectStage: "New-build hotel (pre-opening)",
        challenge: [
            "No clear technology roadmap during construction",
            "Risk of costly redesigns after opening",
            "Lack of coordination between contractors",
        ],
        solution: {
            summary: "Acted as Hotel Technology Consultant",
            deliverables: [
                "Technology design drawings",
                "GPON & structured cabling plans",
                "Wi-Fi, IPTV, VoIP & security specifications",
                "Coordination with architects and engineers",
            ],
        },
        results: [
            "Correct infrastructure installed from day one",
            "Reduced post-construction changes",
            "Lower long-term operational cost",
            "Faster and smoother hotel opening",
        ],
        outcome:
            "A future-ready hotel infrastructure built right from the foundation.",
    },

    {
        id: "international-business-hotel-africa",
        image: hotelAbuja2,
        title: "International Business Hotel – Africa Region",
        location: "Africa (Multi-country)",
        projectType: "Technology Audit & Upgrade Roadmap",
        challenge: [
            "Aging systems across multiple departments",
            "Increasing maintenance cost",
            "No clear upgrade priorities",
        ],
        solution: {
            summary: "Comprehensive Hotel Technology Audit",
            deliverables: [
                "Risk assessment and system health scoring",
                "Phased upgrade roadmap with cost projections",
            ],
        },
        results: [
            "Clear upgrade priorities",
            "Reduced unnecessary spending",
            "Improved long-term planning for management",
        ],
        outcome:
            "A clear, data-driven technology strategy aligned with international operations.",
    },

    {
        id: "serviced-apartments-lagos",
        image: hotelLagos,
        title: "Serviced Apartments – Lagos",
        location: "Lagos, Nigeria",
        projectType: "FTTH / GPON & Smart Living Infrastructure",
        challenge: [
            "Residents demanded faster internet",
            "Copper cabling caused frequent faults",
            "High support cost",
        ],
        solution: {
            summary: "GPON fiber deployment to each apartment",
            deliverables: [
                "Centralized bandwidth management",
                "Infrastructure ready for IPTV, VoIP, and smart access",
            ],
        },
        results: [
            "Faster and more reliable connectivity",
            "Lower maintenance requirements",
            "Increased property value perception",
        ],
        outcome: "A future-ready serviced apartment infrastructure.",
    },

    {
        id: "airport-hotel-lagos",
        title: "Airport Hotel – Lagos, Nigeria",
        image: hotelAbuja,
        location: "Lagos, Nigeria",
        projectType: "High-Availability Network & Business Guest Connectivity",
        hotelProfile:
            "Business hotel serving airline crews, executives, and short-stay travelers",
        challenge: [
            "Constant Wi-Fi downtime affecting business guests",
            "Network failures during peak check-in/check-out hours",
            "No redundancy or failover",
        ],
        solution: {
            summary: "Designed a redundant core network architecture",
            deliverables: [
                "High-availability routing and switching",
                "Segmentation of guest, staff, and back-office traffic",
                "Monitoring and alerting implementation",
            ],
        },
        results: [
            "Near-zero downtime during peak usage",
            "Improved guest satisfaction among business travelers",
            "Reduced emergency maintenance calls",
        ],
        outcome:
            "A business-critical hotel network built for reliability and speed.",
    },

    {
        id: "boutique-hotel-lagos",
        title: "Boutique Hotel – Lagos, Nigeria",
        image: hotelLagos,
        location: "Lagos, Nigeria",
        projectType: "IPTV & Guest Room Entertainment System",
        hotelSize: "40 rooms | Leisure & short-stay guests",
        challenge: [
            "No branding or guest messaging",
            "Poor satellite TV signal quality",
            "No centralized control or content management",
            "Outdated in-room guest experience",
        ],
        solution: {
            summary: "Deployed a hotel-grade IPTV system",
            deliverables: [
                "Branded welcome screens and hotel information",
                "Centralized content control for all rooms",
                "Future-ready PMS billing integration design",
            ],
        },
        results: [
            "Modern, premium in-room guest experience",
            "Reduced maintenance issues compared to satellite TV",
            "Stronger brand perception among guests",
            "Increased guest satisfaction and longer stays",
        ],
        outcome:
            "A transformed guest room experience aligned with modern hospitality expectations.",
    },
];
