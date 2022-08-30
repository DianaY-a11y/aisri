import React from "react";
import "./about.css";
import Mission from "../components/mission";

const supportLinks = [
  {
    name: "Sales",
    href: "#",
    description:
      "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
  },
  {
    name: "Technical Support",
    href: "#",
    description:
      "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
  },
  {
    name: "Media Inquiries",
    href: "#",
    description:
      "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
  },
];

const people = [
  {
    name: "Richard Nyarko",
    role: "Initiator / Leader / Co-Founder",
    title: "Graduate Student at the University of Saskatchewan",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Ernest Tachie-Abiam",
    role: "Manager / Co-Founder",
    description: "",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Francis Asomah",
    role: "Chairman",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Elizabeth Konadu",
    role: "Vice-Chairperson",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Nana Asante Konadu",
    role: "Former Chairman",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Ekwasi Addane",
    role: "Former Chairman",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];

function ExampleOne() {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {people.map((person) => (
        <li
          key={person.email}
          className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
        >
          <div className="flex-1 flex flex-col p-8">
            <img
              className="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
              src={person.imageUrl}
              alt=""
            />
            <h3 className="mt-6 text-gray-900 text-sm font-medium">
              {person.name}
            </h3>
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dd className="mt-3">
                <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                  {person.role}
                </span>
              </dd>
              <dt className="sr-only">Title</dt>
              <dd className="text-gray-500 text-sm">{person.title}</dd>
              <dt className="sr-only">Role</dt>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="w-0 flex-1 flex"></div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

function TryThis() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative bg-gray-800 pb-32">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
            alt=""
          />
          <div
            className="absolute inset-0 bg-gray-800 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Support
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate
            id malesuada non. Cras aliquet purus dui laoreet diam sed lacus,
            fames. Dui, amet, nec sit pulvinar.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div
              key={link.name}
              className="flex flex-col rounded-2xl bg-white shadow-xl"
            >
              <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                <h3 className="text-xl font-medium text-gray-900">
                  {link.name}
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  {link.description}
                </p>
              </div>
              <div className="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
                <a
                  href={link.href}
                  className="text-base font-medium text-indigo-700 hover:text-indigo-600"
                >
                  Contact us<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function About() {
  function Example() {
    return (
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4"
      >
        {people.map((person) => (
          <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow ">
            <div className="flex-1 flex flex-col p-8">
              <img
                className="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-gray-900 text-sm font-medium">
                {person.name}
              </h3>
            </div>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <>
      <Mission />
    </>

    // <div>
    //   <Mission />
    //   <div className="About" style={{ backgroundColor: "white" }}>
    //     <div className="Text" style={{ color: "black" }}>
    //       <h1>Overview</h1>
    //     </div>
    //   </div>
    //   <div className="About">
    //     <h1 style={{ fontSize: "27px", fontWeight: "bold" }}>Founding Story</h1>
    //     <div className="Text">
    //       Asiri Rural Development Network (Asiri RDN) was founded on December
    //       11, 2019 and registered on September 25, 2020. Its existence emerged
    //       from an idea presented in a community development project paper
    //       written by Mr. Richard Nyarko, Grad Student at University of
    //       Saskatchewan. Originally, the Asiri RDN was co-founded by Richard
    //       Nyarko (initiator/leader) and Ernest Tachie-Abiam (manager). Nana
    //       Asante Konadu and Mr. Kwasi Addane acted as the first Chairman and
    //       Vice-Chairman respectively until the formal appointment of Dr. Francis
    //       Asomah as Chairman and Dr. Elizabeth Konadu as Vice- Chairperson. The
    //       goal is to contribute to the improvement of socio-economic wellbeing
    //       of the residents of Asiri through advancing development projects in
    //       Asiri Ghana. Currently there are over 200 members supporting this
    //       organization. In addition to those (elsewhere) who are interested in
    //       supporting rural communities, our members are mainly people from Asiri
    //       Ghana who are interested in the development of Asiri as their
    //       community and are ready to contribute to its development.
    //     </div>
    //   </div>
    //   <div className="About" style={{ backgroundColor: "white" }}>
    //     <div className="Text" style={{ color: "black" }}>
    //       <h1 style={{ fontSize: "27px", fontWeight: "bold" }}>Team</h1>
    //       Our team is made up of an array of professionals, including medical
    //       doctors, public health specialists, accountants, professors, students,
    //       and many others in various fields of occupation. Most of them live in
    //       Europe, United States, Canada, South Africa, Australia, and Ghana.
    //     </div>
    //     <div
    //       style={{
    //         width: "100%",

    //         display: "flex",
    //         justifyContent: "center",
    //       }}
    //     >
    //       <Example />
    //     </div>
    //   </div>
    //   <div className="About">
    //     <h1 style={{ fontSize: "27px", fontWeight: "bold" }}>Members</h1>
    //     <div className="Text">
    //       Currently there are over 200 members supporting this organization. In
    //       addition to those (elsewhere) who are interested in supporting rural
    //       communities, our members are mainly people from Asiri Ghana who are
    //       interested in the development of Asiri as their community and are
    //       ready to contribute to its development. Membership is voluntary and is
    //       open to all individuals living in Ghana or elsewhere around the world
    //       who express interest to support the objectives of the organization.
    //     </div>
    //   </div>
    // </div>
  );
}
