"use client"

import "react-google-reviews/dist/index.css"
import { ReactGoogleReviews } from "react-google-reviews"
import { ExternalLink, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const FEATURABLE_WIDGET_ID = "d0d9d01b-84f1-463b-8d5a-44ffe0a215ec"
const LEAVE_REVIEW_URL = "https://www.google.com/search?q=nexgen+auto+detailing&sourceid=chrome&source=chrome.ob&ie=UTF-8&zx=1792085600027#lrd=0x699d3783f6608ac1:0xd7ea0132b0980ec3,3,,,,"
const VIEW_REVIEWS_URL = "https://www.google.com/search?q=nexgen+auto+detailing&sourceid=chrome&source=chrome.ob&ie=UTF-8&zx=1792085600027#lrd=0x699d3783f6608ac1:0xd7ea0132b0980ec3,1,,,,"

export function GoogleReviewsSection() {
  return (
    <section id="reviews" className="overflow-hidden py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Trusted Quality
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Backed by Real Local Reviews
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-neutral-400">
            See why drivers across Trumbull and Mahoning Counties trust Nex-Gen
            AutoDetail with their vehicles.
          </p>
        </div>

        <div className="mx-auto max-w-6xl p-4 sm:p-8">
          <ReactGoogleReviews
            layout="carousel"
            featurableId={FEATURABLE_WIDGET_ID}
            theme="dark"
            maxItems={3}
            carouselAutoplay
            carouselSpeed={5000}
            showDots
            loadingMessage="Loading local reviews..."
            errorMessage="Reviews are temporarily unavailable. Please check back soon."
            loaderSpinnerStyle={{ fill: "var(--primary)" }}
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild>
            <a href={LEAVE_REVIEW_URL} target="_blank" rel="noopener noreferrer">
              <Star aria-hidden="true" />
              Leave a review
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={VIEW_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
              <ExternalLink aria-hidden="true" />
              View all reviews
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}