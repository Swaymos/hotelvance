// data/services.js

import {
    Database,
    Wifi,
    Tv,
    Phone,
    Server,
    Shield,
    Network,
    Cable,
} from "lucide-react";

const services = [
    {
        slug: "pms-integration",
        title: "PMS Integration",
        short:
            "Integrate your Property Management System with Wi-Fi, IPTV, VoIP, billing, smart rooms and other hospitality technologies.",

        href: "/services/pms-integration",

        icon: "Database",

        features: [
            "Oracle OPERA",
            "Cloudbeds",
            "Real-Time Sync",
        ],
    },

    {
        slug: "hotel-wifi",
        title: "Hotel Wi-Fi",

        short:
            "Enterprise-grade wireless networking with secure guest internet, captive portals, analytics and Wi-Fi 6 coverage.",

        href: "/services/hotel-wifi",

        icon: "Wifi",

        features: [
            "Wi-Fi 6",
            "Guest Portal",
            "Cloud Management",
        ],
    },

    {
        slug: "hotel-iptv",
        title: "Hotel IPTV",

        short:
            "Interactive television systems with guest casting, digital signage and seamless PMS integration.",

        href: "/services/hotel-iptv",

        icon: "Tv",

        features: [
            "Interactive TV",
            "Guest Casting",
            "Digital Signage",
        ],
    },

    {
        slug: "hotel-voip",
        title: "Hotel VoIP",

        short:
            "Cloud-based hotel communication systems with SIP telephony, guest room phones and unified communications.",

        href: "/services/hotel-voip",

        icon: "Phone",

        features: [
            "Cloud PBX",
            "SIP Phones",
            "PMS Integration",
        ],
    },

    {
        slug: "gpon-fiber",

        title: "GPON Fiber",

        short:
            "High-speed GPON fiber infrastructure delivering reliable connectivity throughout hospitality properties.",

        href: "/services/gpon-fiber",

        icon: "Cable",

        features: [
            "Fiber Backbone",
            "High Bandwidth",
            "Future Ready",
        ],
    },

    {
        slug: "network-infrastructure",

        title: "Network Infrastructure",

        short:
            "Enterprise switching, routing, structured cabling and wireless infrastructure built for hotels.",

        href: "/services/network-infrastructure",

        icon: "Network",

        features: [
            "Switching",
            "Routing",
            "Structured Cabling",
        ],
    },

    {
        slug: "cctv-access-control",

        title: "CCTV & Access Control",

        short:
            "Protect guests, staff and assets with intelligent surveillance and secure access control solutions.",

        href: "/services/cctv-access-control",

        icon: "Shield",

        features: [
            "IP Cameras",
            "Access Control",
            "Remote Monitoring",
        ],
    },

    {
        slug: "managed-it-services",

        title: "Managed IT Services",

        short:
            "24/7 monitoring, cybersecurity, cloud infrastructure and proactive IT support for hospitality businesses.",

        href: "/services/managed-it-services",

        icon: "Server",

        features: [
            "24/7 Support",
            "Cybersecurity",
            "Cloud Management",
        ],
    },
];

export default services;