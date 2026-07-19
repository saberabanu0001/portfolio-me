type IconProps = {
  size?: number
  className?: string
}

const iconDefaults = (size = 20) => ({ width: size, height: size })

export const ExternalLink = ({ size = 20, className }: IconProps) => (
  <svg {...iconDefaults(size)} className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11 3H5C3.895 3 3 3.895 3 5V15C3 16.105 3.895 17 5 17H15C16.105 17 17 16.105 17 15V9M14 3H17M17 3V6M17 3L8 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const Github = ({ size = 20, className }: IconProps) => (
  <svg {...iconDefaults(size)} className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.5 15C7.5 15 6.5 15 5 16.5C9.75 18.5 13.25 16.5 14 15.5C14.5 15 15 14.5 15 14.5M7.5 15C4.5 13.5 3 11 2.5 9C3.25 7.5 4.5 6.5 5 6C2.75 5 2 3 2 3C2 3 3.5 2.5 5 4C6.5 3.5 8 3.5 10 3.5C12 3.5 13.5 3.5 15 4C16.5 2.5 18 3 18 3C18 3 17.25 5 15 6C15.5 6.5 16.75 7.5 17.5 9C17 11 15.5 13.5 12.5 15M7.5 15V12.5C7.5 12 7.5 11.5 8 11C8.5 10.5 10 10 11 11.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
)

export const LinkedIn = ({ size = 24, className }: IconProps) => (
  <svg {...iconDefaults(size)} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 8C17.591 8 19.117 8.632 20.243 9.757C21.368 10.883 22 12.409 22 14V21H18V14C18 13.469 17.789 12.961 17.414 12.586C17.039 12.211 16.531 12 16 12C15.469 12 14.961 12.211 14.586 12.586C14.211 12.961 14 13.469 14 14V21H10V14C10 12.409 10.632 10.883 11.757 9.757C12.883 8.632 14.409 8 16 8Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 9H2V21H6V9Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const Twitter = ({ size = 24, className }: IconProps) => (
  <svg {...iconDefaults(size)} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.95718 14.8821 3.28446C14.0247 3.61173 13.2884 4.19439 12.773 4.95372C12.2575 5.71305 11.9877 6.61232 12 7.53V8.53C10.2426 8.57556 8.50127 8.1858 6.93101 7.39543C5.36074 6.60506 4.01032 5.43863 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const Email = ({ size = 24, className }: IconProps) => (
  <svg {...iconDefaults(size)} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 6L12 13L2 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const Facebook = ({ size = 24, className }: IconProps) => (
  <svg {...iconDefaults(size)} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18 2H15C12.2386 2 10 4.23858 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.44772 14.4477 6 15 6H18V2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const Sun = ({ size = 20, className }: IconProps) => (
  <svg {...iconDefaults(size)} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
    <path
      d="M12 2V4M12 20V22M4 12H2M22 12H20M19.07 4.93L17.66 6.34M6.34 17.66L4.93 19.07M19.07 19.07L17.66 17.66M6.34 6.34L4.93 4.93"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

export const Moon = ({ size = 20, className }: IconProps) => (
  <svg {...iconDefaults(size)} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const Rocket = ({ size = 20, className }: IconProps) => (
  <svg {...iconDefaults(size)} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.5 16.5C3 14.5 2 11.5 2 8.5C2 5.5 4 3.5 7 3.5C10 3.5 13 4.5 15 6M15 6L18 3M15 6L12 9M18 14C20 15.5 22 18 22 21C19 21 16.5 19 15 17M9 15L6 18M9 15L12 12M6 18C4.5 16.5 3 14.5 2 11.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M9 9L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export const FileText = ({ size = 20, className }: IconProps) => (
  <svg {...iconDefaults(size)} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M14 2V8H20M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const Trophy = ({ size = 20, className }: IconProps) => (
  <svg {...iconDefaults(size)} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6 9H4.5C3.67157 9 3 9.67157 3 10.5V11C3 12.6569 4.34315 14 6 14H6M18 9H19.5C20.3284 9 21 9.67157 21 10.5V11C21 12.6569 19.6569 14 18 14H18M6 14V16C6 18.2091 7.79086 20 10 20H14C16.2091 20 18 18.2091 18 16V14M6 9V6C6 4.34315 7.34315 3 9 3H15C16.6569 3 18 4.34315 18 6V9M12 20V22M8 22H16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const Star = ({ size = 16, className }: IconProps) => (
  <svg {...iconDefaults(size)} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const User = ({ size = 16, className }: IconProps) => (
  <svg {...iconDefaults(size)} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const GraduationCap = ({ size = 16, className }: IconProps) => (
  <svg {...iconDefaults(size)} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22 10V15M6 14V18.5C6 18.7761 7.34315 20 12 20C16.6569 20 18 18.7761 18 18.5V14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 14L2 9L12 4L22 9L12 14Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

