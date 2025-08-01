import * as React from "react";
import Svg, { Path, Rect, Circle, G, Defs, ClipPath } from "react-native-svg";

interface IconProps {
  size?: number;
  color?: string;
  width?: number;
  height?: number;
}

export const CBXMEETLOGO: React.FC<IconProps> = ({ width, height, color }) => (
  <Svg width={width} height={height} viewBox="0 0 171 153" fill="none">
    <Circle
      cx={85.0427}
      cy={20.446}
      r={15.5}
      transform="rotate(6.9747 85.0427 20.446)"
      stroke="#142F5A"
      strokeWidth={2}
    />
    <Path
      d="M52.403 26.3529C51.5196 29.3003 51.0188 32.4159 50.9594 35.6431C50.6089 54.6936 65.7683 70.4214 84.8188 70.772C103.869 71.1226 119.597 55.9631 119.948 36.9126C120.044 31.662 118.963 26.6635 116.946 22.17C112.615 36.6214 99.0837 47.0304 83.2607 46.7393C69.4608 46.4853 57.7028 38.1626 52.403 26.3529Z"
      fill="#142F5A"
    />
    <Circle
      cx={137.852}
      cy={109.366}
      r={16.5}
      transform="rotate(123.814 137.852 109.366)"
      fill="#142F5A"
    />
    <Path
      d="M93.9317 86.913C102.587 70.561 122.86 64.3216 139.212 72.9769C141.168 74.0126 142.978 75.2157 144.636 76.5564C132.297 76.933 120.501 83.7433 114.311 95.4374C107.14 108.985 109.619 125.07 119.32 135.828C115.423 135.334 111.547 134.141 107.868 132.193C91.5157 123.538 85.2763 103.265 93.9317 86.913Z"
      stroke="#142F5A"
      strokeWidth={2}
    />
    <Circle
      cx={16.5}
      cy={16.5}
      r={15.5}
      transform="matrix(0.556492 0.830853 0.830853 -0.556492 9.729 105.317)"
      stroke="#142F5A"
      strokeWidth={2}
    />
    <Path
      d="M76.5405 87.3907C67.8851 71.0388 47.6124 64.7994 31.2604 73.4547C29.3038 74.4904 27.4939 75.6935 25.836 77.0342C38.1752 77.4108 49.9709 84.2211 56.1608 95.9152C63.3318 109.463 60.8534 125.548 51.152 136.305C55.049 135.811 58.9252 134.618 62.6045 132.671C78.9565 124.015 85.1959 103.743 76.5405 87.3907Z"
      stroke="#142F5A"
      strokeWidth={2}
    />
  </Svg>
);

export const HomeIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 25 24" fill="none">
    <Path
      d="M15.5928 15.1111C15.5928 15.0816 15.4874 15.0534 15.2999 15.0325C15.1123 15.0117 14.858 15 14.5928 15H10.5928C10.3276 15 10.0732 15.0117 9.88567 15.0325C9.69813 15.0534 9.59277 15.0816 9.59277 15.1111"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.59277 9.15763C3.5927 8.89731 3.65611 8.64012 3.77856 8.40398C3.90102 8.16785 4.07957 7.95846 4.30177 7.79043L11.3018 2.42276C11.6628 2.14977 12.1201 2 12.5928 2C13.0654 2 13.5228 2.14977 13.8838 2.42276L20.8838 7.79043C21.106 7.95846 21.2845 8.16785 21.407 8.40398C21.5294 8.64012 21.5928 8.89731 21.5928 9.15763V17.2105C21.5928 17.6851 21.3821 18.1403 21.007 18.4759C20.6319 18.8115 20.1232 19 19.5928 19H5.59277C5.06234 19 4.55363 18.8115 4.17856 18.4759C3.80349 18.1403 3.59277 17.6851 3.59277 17.2105V9.15763Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const EventIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Rect
      x={1.03867}
      y={0.852143}
      width={22.2947}
      height={22.2947}
      rx={5.37985}
      stroke={color}
      strokeWidth={0.891786}
    />
    <Path
      d="M0.623047 7.89258H23.693"
      stroke="#B0C9F5"
      strokeWidth={0.891786}
    />
    <Circle cx={8.74294} cy={4.01833} r={1.22341} fill="#B0C9F5" />
    <Circle
      cx={10.0608}
      cy={11.679}
      r={0.779305}
      stroke={color}
      strokeWidth={0.713429}
    />
    <Circle cx={10.388} cy={15.9739} r={1.13602} fill="#B0C9F5" />
    <Circle
      cx={14.3128}
      cy={11.679}
      r={0.779305}
      stroke={color}
      strokeWidth={0.713429}
    />
    <Circle
      cx={14.3128}
      cy={15.9739}
      r={0.779305}
      stroke={color}
      strokeWidth={0.713429}
    />
    <Circle
      cx={5.76981}
      cy={15.9739}
      r={0.779305}
      stroke={color}
      strokeWidth={0.713429}
    />
    <Circle
      cx={18.5091}
      cy={11.679}
      r={0.779305}
      stroke={color}
      strokeWidth={0.713429}
    />
    <Circle cx={15.4402} cy={4.01833} r={1.22341} fill="#B0C9F5" />
  </Svg>
);

export const DashboardIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 25 24" fill="none">
    <Path
      d="M9.68652 3H4.68652C4.13424 3 3.68652 3.44772 3.68652 4V11C3.68652 11.5523 4.13424 12 4.68652 12H9.68652C10.2388 12 10.6865 11.5523 10.6865 11V4C10.6865 3.44772 10.2388 3 9.68652 3Z"
      stroke="#B0C9F5"
      strokeWidth={0.96}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20.6865 3H15.6865C15.1342 3 14.6865 3.44772 14.6865 4V7C14.6865 7.55228 15.1342 8 15.6865 8H20.6865C21.2388 8 21.6865 7.55228 21.6865 7V4C21.6865 3.44772 21.2388 3 20.6865 3Z"
      stroke="#B0C9F5"
      strokeWidth={0.96}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20.6865 12H15.6865C15.1342 12 14.6865 12.4477 14.6865 13V20C14.6865 20.5523 15.1342 21 15.6865 21H20.6865C21.2388 21 21.6865 20.5523 21.6865 20V13C21.6865 12.4477 21.2388 12 20.6865 12Z"
      stroke="#B0C9F5"
      strokeWidth={0.96}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.68652 16H4.68652C4.13424 16 3.68652 16.4477 3.68652 17V20C3.68652 20.5523 4.13424 21 4.68652 21H9.68652C10.2388 21 10.6865 20.5523 10.6865 20V17C10.6865 16.4477 10.2388 16 9.68652 16Z"
      stroke="#B0C9F5"
      strokeWidth={0.96}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const SettingsIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 25 24" fill="none">
    <Path
      d="M12.9065 2H12.4665C11.9361 2 11.4274 2.21071 11.0523 2.58579C10.6772 2.96086 10.4665 3.46957 10.4665 4V4.18C10.4662 4.53073 10.3736 4.87519 10.1981 5.17884C10.0225 5.48248 9.77026 5.73464 9.46653 5.91L9.03653 6.16C8.73249 6.33554 8.3876 6.42795 8.03653 6.42795C7.68545 6.42795 7.34056 6.33554 7.03653 6.16L6.88653 6.08C6.42759 5.81526 5.88236 5.74344 5.37053 5.88031C4.85869 6.01717 4.42208 6.35154 4.15653 6.81L3.93653 7.19C3.67179 7.64893 3.59997 8.19416 3.73683 8.706C3.8737 9.21783 4.20806 9.65445 4.66653 9.92L4.81653 10.02C5.1188 10.1945 5.37014 10.4451 5.54558 10.7468C5.72101 11.0486 5.81442 11.391 5.81653 11.74V12.25C5.81792 12.6024 5.72618 12.949 5.55057 13.2545C5.37496 13.5601 5.12173 13.8138 4.81653 13.99L4.66653 14.08C4.20806 14.3456 3.8737 14.7822 3.73683 15.294C3.59997 15.8058 3.67179 16.3511 3.93653 16.81L4.15653 17.19C4.42208 17.6485 4.85869 17.9828 5.37053 18.1197C5.88236 18.2566 6.42759 18.1847 6.88653 17.92L7.03653 17.84C7.34056 17.6645 7.68545 17.5721 8.03653 17.5721C8.3876 17.5721 8.73249 17.6645 9.03653 17.84L9.46653 18.09C9.77026 18.2654 10.0225 18.5175 10.1981 18.8212C10.3736 19.1248 10.4662 19.4693 10.4665 19.82V20C10.4665 20.5304 10.6772 21.0391 11.0523 21.4142C11.4274 21.7893 11.9361 22 12.4665 22H12.9065C13.437 22 13.9457 21.7893 14.3207 21.4142C14.6958 21.0391 14.9065 20.5304 14.9065 20V19.82C14.9069 19.4693 14.9995 19.1248 15.175 18.8212C15.3505 18.5175 15.6028 18.2654 15.9065 18.09L16.3365 17.84C16.6406 17.6645 16.9855 17.5721 17.3365 17.5721C17.6876 17.5721 18.0325 17.6645 18.3365 17.84L18.4865 17.92C18.9455 18.1847 19.4907 18.2566 20.0025 18.1197C20.5144 17.9828 20.951 17.6485 21.2165 17.19L21.4365 16.8C21.7013 16.3411 21.7731 15.7958 21.6362 15.284C21.4994 14.7722 21.165 14.3356 20.7065 14.07L20.5565 13.99C20.2513 13.8138 19.9981 13.5601 19.8225 13.2545C19.6469 12.949 19.5551 12.6024 19.5565 12.25V11.75C19.5551 11.3976 19.6469 11.051 19.8225 10.7455C19.9981 10.4399 20.2513 10.1862 20.5565 10.01L20.7065 9.92C21.165 9.65445 21.4994 9.21783 21.6362 8.706C21.7731 8.19416 21.7013 7.64893 21.4365 7.19L21.2165 6.81C20.951 6.35154 20.5144 6.01717 20.0025 5.88031C19.4907 5.74344 18.9455 5.81526 18.4865 6.08L18.3365 6.16C18.0325 6.33554 17.6876 6.42795 17.3365 6.42795C16.9855 6.42795 16.6406 6.33554 16.3365 6.16L15.9065 5.91C15.6028 5.73464 15.3505 5.48248 15.175 5.17884C14.9995 4.87519 14.9069 4.53073 14.9065 4.18V4C14.9065 3.46957 14.6958 2.96086 14.3207 2.58579C13.9457 2.21071 13.437 2 12.9065 2Z"
      stroke="#B0C9F5"
      strokeWidth={0.94}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.6865 15C14.3434 15 15.6865 13.6569 15.6865 12C15.6865 10.3431 14.3434 9 12.6865 9C11.0297 9 9.68652 10.3431 9.68652 12C9.68652 13.6569 11.0297 15 12.6865 15Z"
      stroke="#B0C9F5"
      strokeWidth={0.94}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const BackIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M15 6L9 12L15 18"
      stroke="#040C1A"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15 6L9 12L15 18"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15 6L9 12L15 18"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const GoogleIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 48 48">
    <Path
      fill="#ffc107"
      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
    />
    <Path
      fill="#ff3d00"
      d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"
    />
    <Path
      fill="#4caf50"
      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
    />
    <Path
      fill="#1976d2"
      d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
    />
  </Svg>
);

// search icon
export const SearchIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 19 18" fill="none">
    <Path
      d="M8.38428 14.25C11.698 14.25 14.3843 11.5637 14.3843 8.25C14.3843 4.93629 11.698 2.25 8.38428 2.25C5.07057 2.25 2.38428 4.93629 2.38428 8.25C2.38428 11.5637 5.07057 14.25 8.38428 14.25Z"
      stroke="#040C1A"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.38428 14.25C11.698 14.25 14.3843 11.5637 14.3843 8.25C14.3843 4.93629 11.698 2.25 8.38428 2.25C5.07057 2.25 2.38428 4.93629 2.38428 8.25C2.38428 11.5637 5.07057 14.25 8.38428 14.25Z"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.38428 14.25C11.698 14.25 14.3843 11.5637 14.3843 8.25C14.3843 4.93629 11.698 2.25 8.38428 2.25C5.07057 2.25 2.38428 4.93629 2.38428 8.25C2.38428 11.5637 5.07057 14.25 8.38428 14.25Z"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.1343 15.002L12.6577 12.5254"
      stroke="#040C1A"
      strokeWidth={1.15189}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.1343 15.002L12.6577 12.5254"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={1.15189}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.1343 15.002L12.6577 12.5254"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={1.15189}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const BurgerIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 19 18" fill="none">
    <G opacity={0.6}>
      <Path
        d="M3.13428 9H15.1343"
        stroke="#040C1A"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.13428 9H15.1343"
        stroke="black"
        strokeOpacity={0.2}
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.13428 9H15.1343"
        stroke="black"
        strokeOpacity={0.2}
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Path
      d="M3.13428 4.5H15.1343"
      stroke="#040C1A"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.13428 4.5H15.1343"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.13428 4.5H15.1343"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <G opacity={0.2}>
      <Path
        d="M3.13428 13.5H15.1343"
        stroke="#040C1A"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.13428 13.5H15.1343"
        stroke="black"
        strokeOpacity={0.2}
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.13428 13.5H15.1343"
        stroke="black"
        strokeOpacity={0.2}
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);

export const PlusIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      fill={color}
      d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2"
    />
  </Svg>
);

export const ShareIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 19 19" fill="none">
    <Path
      d="M14.25 6.33301C15.5617 6.33301 16.625 5.26968 16.625 3.95801C16.625 2.64633 15.5617 1.58301 14.25 1.58301C12.9383 1.58301 11.875 2.64633 11.875 3.95801C11.875 5.26968 12.9383 6.33301 14.25 6.33301Z"
      stroke="#040C1A"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.25 6.33301C15.5617 6.33301 16.625 5.26968 16.625 3.95801C16.625 2.64633 15.5617 1.58301 14.25 1.58301C12.9383 1.58301 11.875 2.64633 11.875 3.95801C11.875 5.26968 12.9383 6.33301 14.25 6.33301Z"
      stroke="black"
      strokeOpacity={0.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.25 6.33301C15.5617 6.33301 16.625 5.26968 16.625 3.95801C16.625 2.64633 15.5617 1.58301 14.25 1.58301C12.9383 1.58301 11.875 2.64633 11.875 3.95801C11.875 5.26968 12.9383 6.33301 14.25 6.33301Z"
      stroke="black"
      strokeOpacity={0.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4.75 11.875C6.06168 11.875 7.125 10.8117 7.125 9.5C7.125 8.18832 6.06168 7.125 4.75 7.125C3.43832 7.125 2.375 8.18832 2.375 9.5C2.375 10.8117 3.43832 11.875 4.75 11.875Z"
      stroke="#040C1A"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4.75 11.875C6.06168 11.875 7.125 10.8117 7.125 9.5C7.125 8.18832 6.06168 7.125 4.75 7.125C3.43832 7.125 2.375 8.18832 2.375 9.5C2.375 10.8117 3.43832 11.875 4.75 11.875Z"
      stroke="black"
      strokeOpacity={0.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4.75 11.875C6.06168 11.875 7.125 10.8117 7.125 9.5C7.125 8.18832 6.06168 7.125 4.75 7.125C3.43832 7.125 2.375 8.18832 2.375 9.5C2.375 10.8117 3.43832 11.875 4.75 11.875Z"
      stroke="black"
      strokeOpacity={0.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.25 17.417C15.5617 17.417 16.625 16.3537 16.625 15.042C16.625 13.7303 15.5617 12.667 14.25 12.667C12.9383 12.667 11.875 13.7303 11.875 15.042C11.875 16.3537 12.9383 17.417 14.25 17.417Z"
      stroke="#040C1A"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.25 17.417C15.5617 17.417 16.625 16.3537 16.625 15.042C16.625 13.7303 15.5617 12.667 14.25 12.667C12.9383 12.667 11.875 13.7303 11.875 15.042C11.875 16.3537 12.9383 17.417 14.25 17.417Z"
      stroke="black"
      strokeOpacity={0.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.25 17.417C15.5617 17.417 16.625 16.3537 16.625 15.042C16.625 13.7303 15.5617 12.667 14.25 12.667C12.9383 12.667 11.875 13.7303 11.875 15.042C11.875 16.3537 12.9383 17.417 14.25 17.417Z"
      stroke="black"
      strokeOpacity={0.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.80029 10.6953L12.2074 13.8461"
      stroke="#040C1A"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.80029 10.6953L12.2074 13.8461"
      stroke="black"
      strokeOpacity={0.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.80029 10.6953L12.2074 13.8461"
      stroke="black"
      strokeOpacity={0.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.1995 5.15332L6.80029 8.30415"
      stroke="#040C1A"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.1995 5.15332L6.80029 8.30415"
      stroke="black"
      strokeOpacity={0.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.1995 5.15332L6.80029 8.30415"
      stroke="black"
      strokeOpacity={0.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const UpRightArrowIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 17 14" fill="none">
    <Path
      d="M16.7429 2.08371C16.7892 1.81146 16.606 1.55329 16.3337 1.50706L11.8972 0.753691C11.625 0.70746 11.3668 0.890681 11.3206 1.16293C11.2743 1.43517 11.4576 1.69335 11.7298 1.73958L15.6733 2.40924L15.0037 6.35278C14.9575 6.62503 15.1407 6.8832 15.4129 6.92943C15.6852 6.97566 15.9433 6.79244 15.9896 6.5202L16.7429 2.08371ZM1.03937 13.4078L16.5394 2.40775L15.9606 1.59225L0.460626 12.5922L1.03937 13.4078Z"
      fill="black"
    />
  </Svg>
);

export const ShareLinkToIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 40 54" fill="none">
    <Circle
      cx={6.64703}
      cy={30.4112}
      r={4.06588}
      stroke={color}
      strokeWidth={0.602353}
    />
    <Circle cx={19.8235} cy={34.1758} r={3.76471} fill={color} />
    <Circle
      cx={33.0001}
      cy={30.4112}
      r={4.06588}
      stroke={color}
      strokeWidth={0.602353}
    />
    <Path
      d="M13.3235 43.5297V47.6861C13.3235 48.5513 13.7471 49.3615 14.4605 49.8509C16.192 51.0386 18.4893 52.592 18.9732 52.834C19.5758 53.1353 20.1031 52.9595 20.2915 52.834L25.0786 49.842C25.8495 49.3602 26.3178 48.5153 26.3178 47.6062V43.2295C26.3178 41.2709 24.4346 40.6557 23.493 40.593C21.6725 40.5302 17.6173 40.4423 15.96 40.593C14.4801 40.7275 13.691 42.0735 13.4049 42.9411C13.3425 43.1306 13.3235 43.3302 13.3235 43.5297Z"
      stroke={color}
      strokeWidth={0.602353}
    />
    <Path
      d="M12.5709 37.391C12.5709 37.1399 12.3449 36.6001 11.441 36.4494C10.5696 36.3042 6.36118 36.3806 4.14732 36.4425C3.9876 36.447 3.82937 36.4639 3.67571 36.5078C2.74685 36.7727 1.22154 37.5641 1.08319 39.0859C0.967667 40.3566 0.992393 41.1919 1.03851 41.6255C1.05885 41.8168 1.12462 41.9994 1.2422 42.1516C1.50003 42.4855 2.04063 43.0271 2.96642 43.6057C4.17169 44.359 7.10954 45.9283 8.4278 46.6189"
      stroke={color}
      strokeWidth={0.602353}
    />
    <Path
      d="M27.2599 37.391C27.2599 37.1399 27.4859 36.6001 28.3898 36.4494C29.2613 36.3042 33.4696 36.3806 35.6835 36.4425C35.8432 36.447 36.0014 36.4639 36.1551 36.5078C37.084 36.7727 38.6093 37.5641 38.7476 39.0859C38.8631 40.3566 38.8384 41.1919 38.7923 41.6255C38.772 41.8168 38.7062 41.9994 38.5886 42.1516C38.3308 42.4855 37.7902 43.0271 36.8644 43.6057C35.6591 44.359 32.7213 45.9283 31.403 46.6189"
      stroke={color}
      strokeWidth={0.602353}
    />
    <Circle
      cx={20.2847}
      cy={13.2847}
      r={13.2847}
      fill="#7EBED5"
      fillOpacity={0.11}
    />
    <G clipPath="url(#clip0_75_3524)">
      <Path
        d="M19.177 13.8372C19.4147 14.155 19.718 14.4179 20.0663 14.6082C20.4145 14.7985 20.7997 14.9116 21.1955 14.94C21.5914 14.9683 21.9887 14.9112 22.3605 14.7725C22.7324 14.6338 23.07 14.4168 23.3506 14.1361L25.0112 12.4755C25.5153 11.9535 25.7943 11.2544 25.788 10.5287C25.7817 9.80308 25.4906 9.10892 24.9775 8.59578C24.4643 8.08264 23.7702 7.79157 23.0445 7.78526C22.3188 7.77896 21.6197 8.05792 21.0977 8.56207L20.1457 9.5086"
        stroke={color}
        strokeWidth={0.602353}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.3923 12.73C21.1546 12.4122 20.8513 12.1492 20.5031 11.959C20.1548 11.7687 19.7697 11.6555 19.3738 11.6272C18.978 11.5988 18.5807 11.656 18.2088 11.7947C17.837 11.9334 17.4993 12.1504 17.2187 12.4311L15.5582 14.0917C15.054 14.6137 14.775 15.3128 14.7814 16.0384C14.7877 16.7641 15.0787 17.4583 15.5919 17.9714C16.105 18.4845 16.7992 18.7756 17.5248 18.7819C18.2505 18.7882 18.9496 18.5093 19.4716 18.0051L20.4181 17.0586"
        stroke={color}
        strokeWidth={0.602353}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_75_3524">
        <Rect
          width={13.2847}
          height={13.2847}
          fill={color}
          transform="translate(13.6411 6.6416)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export const CreateAnEventIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 44 43" fill="none">
    <Rect
      x={0.318839}
      y={0.318839}
      width={39.5289}
      height={39.5289}
      rx={9.77326}
      stroke="#040C1A"
      strokeWidth={0.637677}
    />
    <Rect
      x={0.318839}
      y={0.318839}
      width={39.5289}
      height={39.5289}
      rx={9.77326}
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.637677}
    />
    <Rect
      x={0.318839}
      y={0.318839}
      width={39.5289}
      height={39.5289}
      rx={9.77326}
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.637677}
    />
    <Path
      d="M0.0524902 12.9688H40.0172"
      stroke="#040C1A"
      strokeWidth={0.637677}
    />
    <Path
      d="M0.0524902 12.9688H40.0172"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.637677}
    />
    <Path
      d="M0.0524902 12.9688H40.0172"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.637677}
    />
    <Circle cx={12.819} cy={6.25704} r={2.11934} fill="#040C1A" />
    <Circle
      cx={12.819}
      cy={6.25704}
      r={2.11934}
      fill="black"
      fillOpacity={0.2}
    />
    <Circle
      cx={12.819}
      cy={6.25704}
      r={2.11934}
      fill="black"
      fillOpacity={0.2}
    />
    <Circle
      cx={9.0329}
      cy={26.1896}
      r={1.81658}
      stroke="#040C1A"
      strokeWidth={0.302763}
    />
    <Circle
      cx={9.0329}
      cy={26.1896}
      r={1.81658}
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.302763}
    />
    <Circle
      cx={9.0329}
      cy={26.1896}
      r={1.81658}
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.302763}
    />
    <Circle
      cx={16.4013}
      cy={19.5285}
      r={1.81658}
      stroke="#040C1A"
      strokeWidth={0.302763}
    />
    <Circle
      cx={16.4013}
      cy={19.5285}
      r={1.81658}
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.302763}
    />
    <Circle
      cx={16.4013}
      cy={19.5285}
      r={1.81658}
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.302763}
    />
    <Circle
      cx={9.0329}
      cy={33.3547}
      r={1.81658}
      stroke="#040C1A"
      strokeWidth={0.302763}
    />
    <Circle
      cx={9.0329}
      cy={33.3547}
      r={1.81658}
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.302763}
    />
    <Circle
      cx={9.0329}
      cy={33.3547}
      r={1.81658}
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.302763}
    />
    <Circle cx={16.4013} cy={26.1896} r={1.96796} fill="#040C1A" />
    <Circle
      cx={16.4013}
      cy={26.1896}
      r={1.96796}
      fill="black"
      fillOpacity={0.2}
    />
    <Circle
      cx={16.4013}
      cy={26.1896}
      r={1.96796}
      fill="black"
      fillOpacity={0.2}
    />
    <Circle
      cx={23.7673}
      cy={19.5285}
      r={1.81658}
      stroke="#040C1A"
      strokeWidth={0.302763}
    />
    <Circle
      cx={23.7673}
      cy={19.5285}
      r={1.81658}
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.302763}
    />
    <Circle
      cx={23.7673}
      cy={19.5285}
      r={1.81658}
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.302763}
    />
    <Circle
      cx={16.4013}
      cy={33.3547}
      r={1.81658}
      stroke="#040C1A"
      strokeWidth={0.302763}
    />
    <Circle
      cx={16.4013}
      cy={33.3547}
      r={1.81658}
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.302763}
    />
    <Circle
      cx={16.4013}
      cy={33.3547}
      r={1.81658}
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.302763}
    />
    <Circle
      cx={23.7673}
      cy={26.1896}
      r={1.81658}
      stroke="#040C1A"
      strokeWidth={0.302763}
    />
    <Circle
      cx={23.7673}
      cy={26.1896}
      r={1.81658}
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.302763}
    />
    <Circle
      cx={23.7673}
      cy={26.1896}
      r={1.81658}
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.302763}
    />
    <Circle
      cx={31.0351}
      cy={19.5285}
      r={1.81658}
      stroke="#040C1A"
      strokeWidth={0.302763}
    />
    <Circle
      cx={31.0351}
      cy={19.5285}
      r={1.81658}
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.302763}
    />
    <Circle
      cx={31.0351}
      cy={19.5285}
      r={1.81658}
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.302763}
    />
    <Circle
      cx={23.6669}
      cy={33.3547}
      r={1.81658}
      stroke="#040C1A"
      strokeWidth={0.302763}
    />
    <Circle
      cx={23.6669}
      cy={33.3547}
      r={1.81658}
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.302763}
    />
    <Circle
      cx={23.6669}
      cy={33.3547}
      r={1.81658}
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.302763}
    />
    <Circle cx={24.4209} cy={6.25704} r={2.11934} fill="#040C1A" />
    <Circle
      cx={24.4209}
      cy={6.25704}
      r={2.11934}
      fill="black"
      fillOpacity={0.2}
    />
    <Circle
      cx={24.4209}
      cy={6.25704}
      r={2.11934}
      fill="black"
      fillOpacity={0.2}
    />
    <Rect
      x={30.396}
      y={28.4834}
      width={13.6038}
      height={13.6038}
      rx={6.80189}
      fill="#040C1A"
    />
    <Rect
      x={30.396}
      y={28.4834}
      width={13.6038}
      height={13.6038}
      rx={6.80189}
      fill="black"
      fillOpacity={0.2}
    />
    <Rect
      x={30.396}
      y={28.4834}
      width={13.6038}
      height={13.6038}
      rx={6.80189}
      fill="black"
      fillOpacity={0.2}
    />
    <Path
      d="M34.4309 31.9658V34.1791H36.6442"
      stroke="#21C0F9"
      strokeWidth={0.637677}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M34.4309 34.1795L35.2803 33.2914C35.5979 32.9862 35.9838 32.7612 36.406 32.6351C36.8281 32.5091 37.2742 32.4857 37.7072 32.5669C38.1402 32.6481 38.5476 32.8315 38.8954 33.1019C39.2432 33.3723 39.5214 33.7218 39.7069 34.1214"
      stroke="#21C0F9"
      strokeWidth={0.637677}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M39.9643 38.6059V36.3926H37.751"
      stroke="#21C0F9"
      strokeWidth={0.637677}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M39.9649 36.3926L39.1156 37.2807C38.798 37.5859 38.412 37.8109 37.9899 37.937C37.5677 38.063 37.1216 38.0864 36.6886 38.0052C36.2556 37.924 35.8483 37.7406 35.5005 37.4702C35.1526 37.1998 34.8744 36.8503 34.689 36.4507"
      stroke="#21C0F9"
      strokeWidth={0.637677}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const DownArrowIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 11 5" fill="none">
    <Path d="M1 1L5.60976 4L10 1" stroke="#040C1A" strokeLinecap="round" />
    <Path
      d="M1 1L5.60976 4L10 1"
      stroke="black"
      strokeOpacity={0.2}
      strokeLinecap="round"
    />
    <Path
      d="M1 1L5.60976 4L10 1"
      stroke="black"
      strokeOpacity={0.2}
      strokeLinecap="round"
    />
  </Svg>
);

export const LocationIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 13 13" fill="none">
    <Path
      d="M10.4861 5.50304C10.4861 7.99047 7.72663 10.581 6.80001 11.3811C6.71369 11.446 6.60861 11.4811 6.5006 11.4811C6.3926 11.4811 6.28752 11.446 6.20119 11.3811C5.27457 10.581 2.51514 7.99047 2.51514 5.50304C2.51514 4.44603 2.93503 3.43231 3.68245 2.68489C4.42987 1.93747 5.44359 1.51758 6.5006 1.51758C7.55761 1.51758 8.57133 1.93747 9.31875 2.68489C10.0662 3.43231 10.4861 4.44603 10.4861 5.50304Z"
      stroke="#778297"
      strokeWidth={0.996366}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.50041 6.99789C7.32583 6.99789 7.99496 6.32876 7.99496 5.50334C7.99496 4.67792 7.32583 4.00879 6.50041 4.00879C5.67499 4.00879 5.00586 4.67792 5.00586 5.50334C5.00586 6.32876 5.67499 6.99789 6.50041 6.99789Z"
      fill="#778297"
    />
  </Svg>
);

export const ZoomIcon: React.FC<IconProps> = ({ size, color }) => <></>;
