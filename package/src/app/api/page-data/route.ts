import { NextResponse } from "next/server";

const contactBar = {
  contactItems: [
    {
      type: "email",
      label: "velasj5@mcmaster.ca",
      icon: "/images/icon/mail-icon.svg",
      link: "mailto:velasj5@mcmaster.ca"
    },
    {
      type: "phone",
      label: "+1 647-385-2181",
      icon: "/images/icon/call-icon.svg",
      link: "tel:+16473852181"
    },
    {
      type: "location",
      label: "Mississauga, ON",
      icon: "/images/icon/web-icon.svg",
      link: "#"
    }
  ],
  socialItems: [
    {
      platform: "linkedin",
      icon: "/images/icon/linkedin-icon.svg",
      link: "https://linkedin.com"
    },
    {
      platform: "dribbble",
      icon: "/images/icon/dribble-icon.svg",
      link: "https://dribbble.com"
    },
    {
      platform: "facebook",
      icon: "/images/icon/facebook-icon.svg",
      link: "https://facebook.com"
    }
  ]
};


const educationData = {
  education: [
    {
      title: "MBA - McMaster University (2026)",
      description: "Master of Business Administration with a focus on strategy, marketing and digital transformation at the DeGroote School of Business."
    },
    {
      title: "Bachelor in Marketing - Universidad de Nariño",
      description: "Undergraduate degree in Marketing, building the foundation in brand management, consumer behavior and business strategy."
    }
  ],
  skills: [
    {
      name: "Strategic Marketing",
      icon: "/images/home/education-skill/figma-icon.svg",
      rating: 5
    },
    {
      name: "Retail Operations",
      icon: "/images/home/education-skill/photoshop-icon.svg",
      rating: 5
    },
    {
      name: "Data Analysis",
      icon: "/images/home/education-skill/sketch-icon.svg",
      rating: 4
    },
    {
      name: "Digital Transformation",
      icon: "/images/home/education-skill/adobe-icon.svg",
      rating: 5
    },
    {
      name: "SAP Fiori",
      icon: "/images/home/education-skill/framer-icon.svg",
      rating: 3
    },
    {
      name: "Salesforce / SQL",
      icon: "/images/home/education-skill/invision-icon.svg",
      rating: 2
    }
  ]
}

const contactLinks = {
  socialLinks: [
    {
      title: "LinkedIn",
      href: "https://linkedin.com"
    },
    {
      title: "Dribbble",
      href: "https://dribbble.com"
    },
    {
      title: "Facebook",
      href: "https://facebook.com"
    },
  ],
  contactInfo: [
    {
      type: "email",
      label: "velasj5@mcmaster.ca",
      link: "mailto:velasj5@mcmaster.ca"
    },
    {
      type: "phone",
      label: "+1 647-385-2181",
      link: "tel:+16473852181"
    }
  ]
}



export const GET = async () => {
  return NextResponse.json({
    contactBar,
    educationData,
    contactLinks
  });
};
