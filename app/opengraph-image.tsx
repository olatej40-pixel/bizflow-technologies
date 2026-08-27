import { ImageResponse } from "next/og";

export const alt =
  "BizFlow Technologies - Digital Solutions. Smarter Business.";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";


export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #081529 0%, #101d37 100%)",
          color: "white",
          padding: "80px",
          fontFamily: "Arial, sans-serif",
        }}
      >

        {/* TOP RIGHT GLOW */}

        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "rgba(91, 76, 240, 0.28)",
            right: "-120px",
            top: "-150px",
          }}
        />


        {/* BOTTOM LEFT GLOW */}

        <div
          style={{
            position: "absolute",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background:
              "rgba(14, 165, 233, 0.12)",
            left: "-130px",
            bottom: "-160px",
          }}
        />


        {/* MAIN CONTENT */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            zIndex: 2,
          }}
        >

          {/* BRAND */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >

            <div
              style={{
                width: "74px",
                height: "74px",
                borderRadius: "18px",
                background: "#5b4cf0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "42px",
                fontWeight: 800,
              }}
            >
              B
            </div>


            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >

              <span
                style={{
                  fontSize: "34px",
                  fontWeight: 800,
                }}
              >
                BizFlow
              </span>

              <span
                style={{
                  color: "#aab3c2",
                  fontSize: "17px",
                }}
              >
                Technologies
              </span>

            </div>

          </div>


          {/* HEADLINE */}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "900px",
            }}
          >

            <span
              style={{
                color: "#9d95ff",
                fontSize: "20px",
                fontWeight: 700,
                marginBottom: "20px",
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              Digital Solutions
            </span>


            <div
              style={{
                display: "flex",
                fontSize: "64px",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-2px",
              }}
            >
              Technology built around real business needs.
            </div>


            <div
              style={{
                display: "flex",
                marginTop: "28px",
                color: "#aab3c2",
                fontSize: "22px",
              }}
            >
              Websites • Software • SaaS • Business Automation
            </div>

          </div>


          {/* FOOTER */}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >

            <span
              style={{
                color: "#aab3c2",
                fontSize: "18px",
              }}
            >
              bizflow.solutions
            </span>


            <span
              style={{
                fontSize: "18px",
                fontWeight: 700,
              }}
            >
              Digital Solutions. Smarter Business.
            </span>

          </div>

        </div>

      </div>
    ),
    {
      ...size,
    }
  );
}