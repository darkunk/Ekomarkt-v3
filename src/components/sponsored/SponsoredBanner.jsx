import React from 'react'

    const SponsoredBanner = () => {
      return (
        <div className="w-full overflow-hidden rounded-lg">
          <div className="relative aspect-[3/1]">
            <img
              src="https://u-web-assets.mercdn.net/assets/lp/xb/xb-home-desktop.png"
              alt="Sponsored Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col items-center justify-center">
              <h1 className="bg-[rgb(255,32,1)] px-3 text-[55px] text-white font-bold mb-4">Ekomarkt x Japan</h1>
              <h2 className="text-white text-2xl text-left">
                Discover millions of new listings<br />from Japan's top brands.
              </h2>
            </div>
          </div>
        </div>
      )
    }

    export default SponsoredBanner
