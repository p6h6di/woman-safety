import {
  IconShieldLock,
  IconMapPin,
  IconShare2,
  IconInfoCircle,
  IconUsers,
  IconMessageCircle,
} from "@tabler/icons-react";

export const BENEFITS = [
  {
    id: 1,
    title: "Safe Route Planning",
    description:
      "Navigate confidently with AI-guided routes that prioritize safety and avoid high-risk areas.",
    Icon: IconMapPin,
  },
  {
    id: 2,
    title: "Instant Emergency SOS",
    description:
      "Send immediate SOS alerts to trusted contacts and nearby authorities with just one tap.",
    Icon: IconMessageCircle,
  },
  {
    id: 3,
    title: "Anonymous Crime Reporting",
    description:
      "Report harassment or suspicious activities without revealing your identity.",
    Icon: IconShieldLock,
  },
  {
    id: 4,
    title: "Live Location Sharing",
    description:
      "Share your real-time location with trusted people for added security during travel.",
    Icon: IconShare2,
  },
  {
    id: 5,
    title: "Safety Tips & Alerts",
    description:
      "Get personalized safety tips and stay informed about incidents in your vicinity.",
    Icon: IconInfoCircle,
  },
  {
    id: 6,
    title: "Community Watch",
    description:
      "Join a community-led network focused on real-time reporting and mutual safety.",
    Icon: IconUsers,
  },
];
