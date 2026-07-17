/**
 * Central icon registry.
 *
 * Import icons from this file (not directly from 'react-icons/*')
 * so the whole app has one place to see, and swap, every icon in use.
 * Uses Feather-style icons (react-icons/fi) as the default set for a
 * clean, modern, consistent line weight — swap the whole set here if
 * the design direction changes later.
 *
 * Usage:
 *   import { IconHeartbeat, IconPhone } from '../../components/Common/icons';
 *   <IconPhone size={20} />
 */
export {
  FiHeart as IconHeartbeat,
  FiActivity as IconPulse,
  FiPhone as IconPhone,
  FiMail as IconMail,
  FiMapPin as IconMapPin,
  FiClock as IconClock,
  FiCalendar as IconCalendar,
  FiCheckCircle as IconCheckCircle,
  FiUser as IconUser,
  FiUsers as IconUsers,
  FiAward as IconAward,
  FiMenu as IconMenu,
  FiX as IconClose,
  FiChevronDown as IconChevronDown,
  FiFacebook as IconFacebook,
  FiTwitter as IconTwitter,
  FiInstagram as IconInstagram,
  FiLinkedin as IconLinkedin,
  FiFileText as IconFileText,
  FiTarget as IconTarget,
  FiEye as IconEye,
  FiEyeOff as IconEyeOff,
  FiAlertCircle as IconAlertCircle,
  FiPlusCircle as IconPlusCircle,
  FiLogOut as IconLogOut,
  FiEdit3 as IconEdit,
} from 'react-icons/fi';

// A couple of brand-colored icons (Google has no good Feather
// equivalent) live in a separate react-icons set — re-exported here
// too, so consumers still only ever import from this one file.
export { FcGoogle as IconGoogle } from 'react-icons/fc';
