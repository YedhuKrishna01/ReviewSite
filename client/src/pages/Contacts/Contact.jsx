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
      <div className="grid h-[87vh] tablet:mt-5 grid-cols-12">
        <div className="col-start-2 col-span-10 tablet:col-start-3 desktop:col-start-4 tablet:col-span-8 desktop:col-span-6 flex flex-col justify-center items-center text-center text-white pt-12 tv:pt-20">
          <div className="text-2xl tablet:text-4xl laptop:text-5xl tv:text-6xl">
            Which movie should I review next?
          </div>
          <section className="flex desktop:w-10/12 tv:w-8/12 homeIntro mt-6 tablet:text-xl laptop:text-2xl desktop:text-xl tablet:mt-8 laptop:mt-12 mb-12 rounded-md w-full h-auto p-7 tablet:p-14">
            <form
              onSubmit={onSubmit}
              className="flex flex-col text-left space-y-4 tablet:space-y-6 w-full"
            >
              <div>
                <label htmlFor="name">Movie Name :</label>
                <br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="rounded-md w-full bg-transparent border-[1px] border-white p-2 placeholder:text-sm tablet:placeholder:text-lg laptop:placeholder:text-2xl desktop:placeholder:text-xl placeholder:pl-2 placeholder:text-zinc-400 text-sm tablet:text-lg laptop:text-2xl desktop:text-xl mt-2 tablet:mt-3"
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
                  className="rounded-md w-full bg-transparent border-[1px] border-white p-2 placeholder:text-sm tablet:placeholder:text-lg laptop:placeholder:text-2xl desktop:placeholder:text-xl placeholder:pl-2 placeholder:text-zinc-400 text-sm tablet:text-lg laptop:text-2xl desktop:text-xl mt-2 tablet:mt-3"
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
                  className="rounded-md h-[30vh] resize-none w-full bg-transparent border-[1px] border-white p-2 placeholder:text-sm tablet:placeholder:text-lg laptop:placeholder:text-2xl desktop:placeholder:text-xl placeholder:pl-2 placeholder:text-zinc-400 text-sm tablet:text-lg laptop:text-2xl desktop:text-xl mt-2 tablet:mt-3"
                  placeholder="Enter your message"
                ></textarea>
                <br />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="mt-5 cursor-pointer w-full tablet:w-8/12 desktop:w-6/12 bg-red-800 hover:bg-red-900 text-white rounded-md py-2 px-4 laptop:py-4 desktop:py-2 desktop:text-lg"
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
