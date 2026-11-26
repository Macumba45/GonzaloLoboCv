type Props = {
  eta: string
  from: string
  to: string
  fromV: string
  toV: string
}

const ROUTE = 'M70 470 L70 400 Q70 380 90 380 L150 380 Q170 380 170 360 L170 250 Q170 230 190 230 L235 230 Q250 230 250 215 L250 120'

export default function RoutePhone({ eta, from, to, fromV, toV }: Props) {
  return (
    <div className="phone" aria-hidden="true">
      <div className="phone-notch" />
      <svg className="map" viewBox="0 0 300 600" preserveAspectRatio="xMidYMid slice">
        <rect width="300" height="600" className="map-ground" />
        <path d="M-20 300 C 60 280, 120 330, 200 300 S 320 260, 340 280 L340 330 C 300 310, 240 350, 190 345 S 60 320, -20 350 Z" className="map-river" />
        <rect x="190" y="400" width="80" height="70" rx="6" className="map-park" />
        <rect x="20" y="120" width="60" height="90" rx="6" className="map-park" />
        <g className="map-streets">
          <path d="M70 0 V600 M170 0 V600 M250 0 V600 M0 120 H300 M0 230 H300 M0 380 H300 M0 470 H300 M120 0 L300 180 M0 520 L140 600" />
        </g>
        <g className="map-minor">
          <path d="M20 0 V600 M120 0 V600 M210 0 V600 M290 0 V600 M0 60 H300 M0 175 H300 M0 430 H300 M0 560 H300" />
        </g>
        <path d={ROUTE} className="route-shadow" />
        <path d={ROUTE} className="route" pathLength={1} />
        <circle cx="70" cy="470" r="7" className="pin-from" />
        <g transform="translate(250 120)">
          <circle r="10" className="pin-to-halo" />
          <circle r="5.5" className="pin-to" />
        </g>
        <g className="car" style={{ offsetPath: `path('${ROUTE}')` }}>
          <circle r="9" className="car-body" />
          <circle r="3" className="car-dot" />
        </g>
      </svg>
      <div className="sheet">
        <p className="sheet-eta">{eta}</p>
        <dl className="sheet-legs">
          <div>
            <dt>{from}</dt>
            <dd>{fromV}</dd>
          </div>
          <div>
            <dt>{to}</dt>
            <dd>{toV}</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
