export default function LineMarker ():JSX.Element{
    return(
        <svg
        width={10}
        height={1}
        viewBox="0 0 10 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >
        <line y1="0.5" x2={10} y2="0.5" stroke="url(#paint0_linear_0_96)" />
        <defs>
            <linearGradient
            id="paint0_linear_0_96"
            x1="-5.02155e-08"
            y1="1.52942"
            x2={10}
            y2="1.52942"
            gradientUnits="userSpaceOnUse"
            >
            <stop offset="0.369906" stopColor="#FCB045" />
            <stop offset={1} stopColor="#FD1D1D" />
            </linearGradient>
        </defs>
        </svg>
    );
}