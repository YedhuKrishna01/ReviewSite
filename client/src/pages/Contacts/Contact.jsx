import React from "react";
import Navbar from "../../components/Navbar";
import Swal from "sweetalert2";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b3be7271-244d-4768-9119-317927040ecb");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-start",
        showConfirmButton: false,
        timer: 3500,

        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Your message has been sent!",
      });
    }
  };
  return (
    <div>
      <Navbar />
      <div className="grid h-[87vh] grid-cols-12">
        <div className="col-start-2 col-span-10 flex flex-col justify-center items-center text-center text-white pt-12">
          <div className="text-2xl">Which movie should I review next?</div>
          <section className="flex homeIntro mt-6 rounded-md w-full h-auto p-7">
            <form
              onSubmit={onSubmit}
              className="flex flex-col text-left space-y-4 w-full"
            >
              <div>
                <label htmlFor="name">Movie Name :</label>
                <br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="rounded-md w-full bg-transparent border-[1px] border-white p-2 placeholder:text-sm placeholder:pl-2 placeholder:text-zinc-300 text-sm mt-2"
                  placeholder="Enter the movie name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email :</label>
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="rounded-md w-full bg-transparent border-[1px] border-white p-2 placeholder:text-sm placeholder:pl-2 placeholder:text-zinc-300 text-sm mt-2"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message">Have any message for me ?</label>
                <br />
                <textarea
                  id="message"
                  name="message"
                  className="rounded-md h-[30vh] resize-none w-full bg-transparent border-[1px] border-white p-2 placeholder:text-sm placeholder:pl-2 placeholder:text-zinc-300 text-sm mt-2"
                  placeholder="Enter your message"
                ></textarea>
                <br />
                <button
                  type="submit"
                  className="mt-5 cursor-pointer w-full bg-red-900 hover:bg-red-800 text-white rounded-md  py-2 px-4"
                >
                  Send
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Contact;
