import React, { useState } from "react";
import { ButtonUnstyled } from "@mui/base";
import { Link } from "@mui/material";
import { MdChevronRight } from "react-icons/md";
import doc1 from "../assets/doc1.png";
import { FaDownload } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Colors } from "../Colors";

export default function ProviderSignup2() {
  const [signed, setSigned] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <p
        style={{
          textAlign: "right",
          fontSize: 12,
          fontWeight: 700,
          color: "#fff",
          paddingBlock: 4,
          paddingInline: 8,
          borderRadius: 8,
          background: Colors.bluePrimary,
          alignSelf: "flex-end",
        }}
      >
        Step 2/3
      </p>
      <h3 style={{ margin: 0 }}>Pagerr Contractor Agreement</h3>
      <p style={{ marginBottom: 24 }}>
        Before you begin working for Pagerr, you'll need to sign this agreement.
      </p>
      <div
        style={{
          overflow: "scroll",
          maxHeight: 420,
          border: "1px solid lightgray",
          padding: 8,
          borderRadius: 4,
          fontSize: 12,
          paddingTop: 20,
          paddingBottom: 40,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere
        vitae magna nec faucibus. Pellentesque cursus eleifend elit, vel lacinia
        ante efficitur id. Pellentesque volutpat, mauris sit amet pharetra
        volutpat, nulla tortor sodales libero, ut ullamcorper ante nunc ut nisi.
        Nullam sodales imperdiet orci, non faucibus ante rhoncus sed. Maecenas
        sodales mauris ut justo cursus maximus. Praesent viverra tristique lacus
        eget molestie. Aenean lobortis eget sem et consectetur. Cras at arcu nec
        ante porttitor fermentum vel ac ligula. Nulla elementum suscipit ligula
        et lobortis. Nulla id pretium nunc. Sed mollis elit at urna tincidunt, a
        viverra lectus laoreet. Etiam dapibus est volutpat ex tristique, ac
        tincidunt turpis viverra. Praesent ut nisi quam. Vestibulum tristique
        metus ipsum, eu eleifend metus hendrerit sed. Fusce ipsum urna, ornare
        vel suscipit nec, convallis quis sapien. Curabitur dictum sem dui,
        eleifend scelerisque nibh iaculis vel. Suspendisse sollicitudin tempor
        convallis. Curabitur nec elit risus. Interdum et malesuada fames ac ante
        ipsum primis in faucibus. Maecenas orci felis, hendrerit ut semper id,
        cursus non sapien. Donec cursus suscipit libero. Vivamus vulputate odio
        enim, mattis lacinia ligula aliquam et. Vestibulum sed convallis mi. Ut
        maximus congue libero, non viverra enim feugiat sed. Etiam pharetra,
        nulla at vestibulum lacinia, nisi ligula malesuada eros, in dapibus diam
        lacus eu erat. Nam a placerat augue. Suspendisse ullamcorper, tellus
        iaculis pellentesque fermentum, velit sapien sodales diam, dapibus
        pellentesque nulla dui ac quam. Ut laoreet porta ligula ut congue. Proin
        mattis, elit non mollis tristique, ligula felis lobortis nisl, vel
        tempor mi lectus vel dolor. Mauris lobortis mi quis velit tempor
        dignissim in in leo. Proin mauris dolor, eleifend ac euismod sodales,
        euismod at ipsum. Integer aliquet ornare felis, non eleifend lorem
        semper lacinia. Pellentesque auctor feugiat facilisis. Cras non enim
        rhoncus, sagittis ligula vel, tempus augue. Vivamus libero libero,
        ullamcorper at lectus eu, congue sodales risus. Etiam sed vestibulum
        orci. Vestibulum cursus ullamcorper turpis, eget vestibulum sapien
        rutrum a. Nullam gravida venenatis posuere. Donec tincidunt commodo
        nisi, non rhoncus velit. Nunc non nisi ut mauris feugiat euismod. Nam
        lorem ligula, ullamcorper quis tellus nec, interdum pretium magna.
        Integer libero nisi, consectetur sed vehicula vitae, consectetur a dui.
        Integer et malesuada elit, non feugiat arcu. Vivamus id arcu facilisis,
        suscipit nulla vel, maximus metus. Phasellus arcu dolor, interdum ut
        quam eget, malesuada vestibulum odio. Vivamus vel vulputate ex, eget
        rutrum arcu. Proin imperdiet est sed magna rutrum molestie. Curabitur
        accumsan dictum lectus vel posuere. Ut eget erat ex. Aliquam euismod
        ligula sed ligula varius pellentesque. Mauris semper, lectus id
        imperdiet maximus, arcu felis hendrerit urna, fermentum eleifend ipsum
        erat eu purus. Quisque et molestie urna. Quisque porttitor vestibulum
        augue ac volutpat.
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          marginBlock: 12,
        }}
      >
        <label
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            fontSize: 16,
            margin: 0,
          }}
        >
          <input
            type="checkbox"
            onChange={(evt) => setSigned(evt.currentTarget.checked)}
            style={{ marginRight: 8 }}
            checked={signed}
          />
          I agree to the Pagerr Contractor Agreement.
        </label>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          marginBottom: 12,
        }}
      >
        <Link
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 12,
          }}
          underline="hover"
          onClick={() => alert("Initiate download")}
        >
          <FaDownload style={{ marginRight: 8 }} size={12} />
          <p>Download and sign later</p>
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          flex: 1,
        }}
      >
        {/* <ButtonUnstyled
          onClick={() => {
            navigate("/providersignup");
          }}
          style={{
            margin: 12,
            borderRadius: 4,
            padding: 12,
            alignSelf: "flex-start",
            fontSize: 14,
            color: "#fff",
            fontWeight: "600",
            border: "0px",
            background: "gray",
            cursor: "pointer",
          }}
        >
          Go Back
        </ButtonUnstyled> */}
        <ButtonUnstyled
          onClick={() => {
            navigate("/providersignup/3");
          }}
          style={{
            margin: 12,
            borderRadius: 4,
            padding: 12,
            alignSelf: "flex-start",
            fontSize: 14,
            color: "#fff",
            fontWeight: "600",
            border: "0px",
            background: "#00b0f0",
            cursor: "pointer",
          }}
        >
          Continue
        </ButtonUnstyled>
      </div>
    </div>
  );
}
