import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const KEY =
  "pk_test_51Pz4BcA0cPbBG8ZjaqdlsEI4r7rP3ObadlNr7FWOl8Gs6cfUiHi8nfdAaJnDI9oregCwpQ3I8jKzMkhrQ3aiO9A9000E4KHgVh";

const Pay = () => {
  const navigation = useNavigate();
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    // console.log(token, "token");
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5001/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );

        navigation("/success");
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    stripeToken && makeRequest();
  }, [stripeToken, navigation]);

  return (
    <StripeCheckout
      name="Lama Shop"
      image="https://static.vecteezy.com/system/resources/previews/010/282/464/original/set-of-various-llama-facial-expression-avatars-adorable-cute-baby-animal-head-illustration-simple-design-of-happy-smiling-animal-cartoon-face-emoticon-graphics-and-colorful-backgrounds-vector.jpg"
      billingAddress
      shippingAddress
      description="there are no description, because I am lazy"
      amount={2000} // 2000 це 20, бо так хоче stripe
      token={onToken}
      stripeKey={KEY}
    >
      {stripeToken ? (
        <span>Processing... Please wait...</span>
      ) : (
        <div
          style={{
            width: "100px",
            height: "70px",
            background: "black",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Pay Now
        </div>
      )}
    </StripeCheckout>
  );
};

export default Pay;
