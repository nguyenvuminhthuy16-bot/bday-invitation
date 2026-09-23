import React from 'react';

export function PastaDoodle({ className = "w-44 h-44" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 200 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm select-none"
      >
        {/* Soft plate shadow */}
        <ellipse cx="100" cy="146" rx="72" ry="12" fill="#EADBCF" fillOpacity="0.45" />

        {/* Plate / Bowl */}
        <ellipse cx="100" cy="128" rx="80" ry="24" fill="#FFFFFF" stroke="#3D2E28" strokeWidth="2.2" strokeLinecap="round" />
        <ellipse cx="100" cy="126" rx="64" ry="18" fill="#FDF6F0" stroke="#3D2E28" strokeWidth="1.4" strokeDasharray="3 3" opacity="0.6" />

        {/* Pasta swirl base */}
        <path
          d="M58 126C60 114 74 106 100 106C126 106 140 114 142 126C142 136 122 140 100 140C78 140 58 136 58 126Z"
          fill="#FDEED9"
        />

        {/* Tangled delicious spaghetti ribbons */}
        <path
          d="M62 127C70 118 85 128 100 120C115 112 130 124 138 127"
          stroke="#DEB078"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M68 122C78 114 92 124 108 116C122 108 132 120 134 123"
          stroke="#DEB078"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M72 131C84 125 96 133 112 127C124 121 129 129 132 131"
          stroke="#E6BC89"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M82 118C92 110 102 114 116 112C126 110 130 116 131 119"
          stroke="#3D2E28"
          strokeWidth="1.6"
          strokeLinecap="round"
        />

        {/* Little herb / basil leaves */}
        <path
          d="M94 114C92 108 97 104 101 106C105 108 104 115 94 114Z"
          fill="#A3B19B"
          stroke="#3D2E28"
          strokeWidth="1.2"
        />
        <path
          d="M102 112C106 107 112 108 112 112C112 116 105 117 102 112Z"
          fill="#8F9E87"
          stroke="#3D2E28"
          strokeWidth="1.2"
        />

        {/* Fork lifting pasta */}
        <g className="transition-transform duration-700 hover:-translate-y-1">
          {/* Fork handle */}
          <path
            d="M148 24C143 38 136 58 132 82C131 87 131 92 130 96"
            stroke="#3D2E28"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          {/* Fork prongs head */}
          <path
            d="M125 96C127 98 133 98 135 96"
            stroke="#3D2E28"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path d="M126 97L125 106" stroke="#3D2E28" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M129 98L129 108" stroke="#3D2E28" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M132 98L133 108" stroke="#3D2E28" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M135 97L136 106" stroke="#3D2E28" strokeWidth="1.8" strokeLinecap="round" />

          {/* Twirl around fork */}
          <path
            d="M120 102C124 99 138 98 142 104C146 110 134 115 125 110C118 106 122 100 134 100"
            stroke="#D8A56A"
            strokeWidth="2.4"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M127 109C128 118 126 122 124 125"
            stroke="#D8A56A"
            strokeWidth="2.2"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        {/* Gentle steam curls */}
        <path
          d="M78 96C75 88 80 82 77 74"
          stroke="#D48170"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeDasharray="2 3"
          opacity="0.6"
        />
        <path
          d="M92 90C89 80 95 72 91 62"
          stroke="#D48170"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeDasharray="2 3"
          opacity="0.6"
        />

        {/* Little floating doodle heart above the steam */}
        <g className="animate-gentle-float">
          <path
            d="M94 48C90 42 82 44 82 49C82 55 93 61 94 62C95 61 106 55 106 49C106 44 98 42 94 48Z"
            fill="#F3D8D8"
            stroke="#D48170"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Tiny doodle sparkle */}
        <path
          d="M60 76V82M57 79H63"
          stroke="#D48170"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path
          d="M148 64V70M145 67H151"
          stroke="#D48170"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.7"
        />
      </svg>
    </div>
  );
}
