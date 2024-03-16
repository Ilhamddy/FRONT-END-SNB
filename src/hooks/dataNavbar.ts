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

export const dataService = [
  {
    data: "120",
    client: "Lorem Ipsum",
    title: "SIMRS",
    description:
      "SIMRS (Sistem Informasi Manajemen Rumah Sakit) menetapkan standar untuk manajemen pasien, menawarkan integrasi yang mulus dari proses registrasi, penerimaan, dan proses penutupan, memastikan efisiensi tak tertandingi dan kepuasan pasien.",
    icon: FaHospital,
  },
  {
    data: "90",
    client: "Lorem Ipsum",
    title: "Electronic Medical Records",
    description:
      "Rekam Medis Elektronik kami merevolusi manajemen informasi pasien, memastikan akses yang aman dan mudah ke riwayat pasien, rencana pengobatan, dan dokumen medis.",
    icon: FaFileMedical,
  },
  {
    data: "150",
    client: "Lorem Ipsum",
    title: "Appointment Scheduling",
    description:
      "Penjadwalan Janji kami dirancang untuk menyederhanakan proses penjadwalan janji dengan platform intuitif, yang dirancang untuk mengurangi waktu tunggu, meningkatkan kepuasan pasien, dan mengoptimalkan beban kerja staf Anda.",
    icon: FaCalendarCheck,
  },
  {
    data: "90",
    client: "Lorem Ipsum",
    title: "Pharmacy Management",
    description:
      "Manajemen Apotek kami menyederhanakan pengelolaan dispensasi obat, kontrol inventaris, dan manajemen resep, memastikan akurasi dan efisiensi dalam operasi apotek Anda.",
    icon: FaPills,
  },
  {
    data: "150",
    client: "Lorem Ipsum",
    title: "Billing and Invoicing",
    description:
      "Penagihan dan Penagihan kami dirancang untuk mengotomatisasi proses penagihan dan penagihan dengan solusi komprehensif, yang dirancang untuk menyederhanakan operasi keuangan, mengurangi kesalahan, dan meningkatkan manajemen siklus pendapatan.",
    icon: FaFileInvoiceDollar,
  },
  {
    data: "90",
    client: "Lorem Ipsum",

    title: "Laboratory Information System",
    description:
      "Sistem Informasi Laboratorium kami meningkatkan efisiensi laboratorium Anda dengan menawarkan manajemen pesanan tes yang mulus, entri hasil, dan kepatuhan dengan standar regulasi.",
    icon: FaVials,
  },
];
