"use client";
import Cookies from "js-cookie";
import Link from "next/link";
import { Suspense } from "react";
export default function readCookie() {
  const userPreferenceTheme = Cookies.get("theme");
  const userPreferenceLang = Cookies.get("lang");

  return (
    <>
      <div className="container   m-auto my-40 items-center justify-between">
        <Suspense fallback={<h3>Loadding.....</h3>}>
          <div className="  justify-center  m-auto">
            <section className="bg-white dark:bg-gray-900">
              <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                  Read Cookies(User Preference)
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                  <p>
                    Current Theme Preference: {userPreferenceTheme || "Not set"}
                  </p>
                  <p>
                    Current Language Preference:{" "}
                    {userPreferenceLang || "Not set"}
                  </p>

                  <div className="my-5">
                    <h2>Cookie Setting Variable</h2>
                    <p className="py-8 lg:py-8">
                      <Link
                        href="/api/preferences"
                        target="_blank"
                        className="border   border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                      >
                        View Preferences
                      </Link>
                    </p>
                  </div>
                </p>
              </div>
            </section>
          </div>
        </Suspense>
      </div>
    </>
  );
}
