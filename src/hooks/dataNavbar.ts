import {
  FaAddressCard,
  FaAffiliatetheme,
  FaAnchor,
  FaCalendarCheck,
  FaFileInvoiceDollar,
  FaFileMedical,
  FaHospital,
  FaPills,
  FaVials,
} from "react-icons/fa6";

export const dataNav = [
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Service",
    link: "/service",
  },
  {
    title: "Product",
    link: "/product",
    list: [
      {
        item: {
          title: "SIMRS",
          link: "/",
        },
      },
      {
        item: {
          title: "E-KLINIK",
          link: "/",
        },
      },
      {
        item: {
          title: "E-PUSKESMAS",
          link: "/",
        },
      },
    ],
  },
  {
    title: "News",
    link: "/news",
  },
  {
    title: "Contact Us",
    link: "/contact",
  },
];

export const dataAdvantages = [
  {
    title: "Integrated Hospital Information Systems",
    icon: FaHospital,
    description:
      "Optimize hospital operations with our comprehensive information systems designed for seamless healthcare management.",
  },
  {
    title: "Electronic Medical Records",
    icon: FaFileMedical,
    description:
      "Secure and efficient management of patient records to enhance the quality of care and operational efficiency.",
  },
  {
    title: "Appointment Scheduling",
    icon: FaCalendarCheck,
    description:
      "Streamline the appointment process with our intuitive scheduling system, improving patient satisfaction and staff productivity.",
  },
  {
    title: "Pharmacy Management",
    icon: FaPills,
    description:
      "Automate pharmacy operations, from inventory management to prescription filling, for increased accuracy and efficiency.",
  },
  {
    title: "Billing and Invoicing",
    icon: FaFileInvoiceDollar,
    description:
      "Simplify financial processes with our integrated billing and invoicing system, designed to reduce errors and enhance revenue cycle management.",
  },
  {
    title: "Laboratory Information System",
    icon: FaVials,
    description:
      "Enhance laboratory operations with our comprehensive system, ensuring accurate test management and regulatory compliance.",
  },
];
