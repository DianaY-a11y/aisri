import "../pages/about.css";
const supportLinks = [
  {
    name: "Mission",
    href: "#",
    description:
      "It is the mission of The Asiri Rural Development Network to improve the wellbeing of rural dwellings in Ghana.",
  },
  {
    name: "Vision",
    href: "#",
    description:
      "Our vision is to partner and mobilize resources to initiate, put in place, improve and advance facilities, services, structures and development projects that improve the wellbeing of rural communities through access to essential human needs.",
  },
  {
    name: "Values",
    href: "#",
    description:
      "We focus on improving the wellbeing, access to resources, and stewardship of the people we serve.",
  },
];

const advisory = [
  {
    name: "Leonard Krasner",
    role: "Senior Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  // More people...
];

const management = [
  {
    name: "Leonard Krasner",
    role: "Senior Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  // More people...
];

const regional = [
  {
    name: "Leonard Krasner",
    role: "Senior Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Leonard Krasner",
    role: "Senior Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Leonard Krasner",
    role: "Senior Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  // More people...
];

function Board() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              The Team
            </h2>
            <p className="text-xl text-gray-500">
              Our team is split into three: our <strong>advisory board</strong>,
              <strong>management team</strong>,{" "}
              <strong>regional directorates</strong>.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6"
          >
            <h2 className="text-1xl font-bold tracking-tight sm:text-4xl">
              Advisory Board
            </h2>
            {advisory.map((person) => (
              <li key={person.name}>
                <div className="space-y-4">
                  <img
                    className="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div className="space-y-2">
                    <div className="text-xs font-medium lg:text-sm">
                      <h3>{person.name}</h3>
                      <p className="text-indigo-600 text-sm">{person.role}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <ul
            role="list"
            className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6"
          >
            <h2 className="text-1xl font-bold tracking-tight sm:text-4xl">
              Management Team
            </h2>
            {management.map((person) => (
              <li key={person.name}>
                <div className="space-y-4">
                  <img
                    className="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div className="space-y-2">
                    <div className="text-xs font-medium lg:text-sm">
                      <h3>{person.name}</h3>
                      <p className="text-indigo-600 text-sm">{person.role}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <ul
            role="list"
            className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6"
          >
            <h2 className="text-1xl font-bold tracking-tight sm:text-4xl">
              Regional Directorates
            </h2>
            {regional.map((person) => (
              <li key={person.name}>
                <div className="space-y-4">
                  <img
                    className="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div className="space-y-2">
                    <div className="text-xs font-medium lg:text-sm">
                      <h3>{person.name}</h3>
                      <p className="text-indigo-600 text-sm">{person.role}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Mission() {
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
          <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Mission, Vision, and Values
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate
            id malesuada non. Cras aliquet purus dui laoreet diam sed lacus,
            fames. Dui, amet, nec sit pulvinar.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section className=" min-w-[80%] relative z-10 mx-auto -mt-32 max-w-full px-7 pb-100 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div
              key={link.name}
              className="flex flex-col rounded-2xl bg-white shadow-xl"
            >
              <div className="relative flex-1 px-6 mb-10 pt-8 md:px-8">
                <h3 className="text-xl font-bold font-medium text-green-900">
                  {link.name}
                </h3>
                {link.name == "Values" ? (
                  <>
                    <p className="text-base text-gray-500">
                      <span class="label">
                        <strong className="text-lg font-medium leading-6 text-green-700">
                          Wellbeing:
                        </strong>{" "}
                        We provide avenues for improved and better wellbeing of
                        humans, mainly rural population, through our mobilized
                        resources for initiating, putting in place, improving
                        and advancing facilities, structure and development
                        projects.
                        <strong>Wellbeing Defined:</strong>
                        The overall state of being healthy, free from distress,
                        compassion and burnouts, depression, and anxiety, among
                        other factors and characteristics that translate into
                        happiness and comfort (Nyarko, 2021).
                      </span>
                      <span class="label">
                        <strong className="text-lg font-medium leading-6 text-green-700">
                          Access:
                        </strong>{" "}
                        We provide basic resources and facilities that many
                        rural dwellings are woefully deprived of.
                      </span>
                      <span class="label">
                        <strong className="text-lg font-medium leading-6 text-green-700">
                          Stewardship:
                        </strong>{" "}
                        We commit to responsible planning and management of
                        resources that are in our care or entrusted to us.
                      </span>
                    </p>
                  </>
                ) : (
                  <p className="text-base text-gray-500">{link.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="mt-8 bg-green-800">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Our Organization
            </p>
            <p className="mx-auto mt-5 max-w-7xl min-w-7xl text-xl text-green-100">
              The Asiri Rural Development Network is a non-profit charitable
              organization formally registered both in Ghana and the United
              States. We are currently committed to improving wellbeing of rural
              residents in a particular part of Ghana (West Africa) through
              initiating and advancing development projects that provides rural
              folks with access to basic or essential human needs.
            </p>
          </div>
        </div>
      </div>
      <Board />
      <div className="mt-8 bg-green-800">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Our History
            </p>
            <p className="mx-auto mt-5 max-w-7xl min-w-7xl text-xl text-green-100">
              Currently registered in the United States, The Asiri Rural
              Development Network (Asiri RDN) was formed on December 11, 2019
              and first registered in Ghana on September 25, 2020. Originally,
              the Asiri RDN was founded by Richard Nyarko (initiator/leader) and
              Ernest Tachie-Abiam (manager and co-founder) with inspiration from
              and based on the ideas presented in a community development
              project paper written by Richard Nyarko, University of
              Saskatchewan Graduate Student. Nana Asante Konadu and Mr. Kwasi
              Addane acted as the first Chairman and Vice-Chairman respectively
              until the formal appointment of Dr. Francis Asomah as Chairman and
              Dr. Elizabeth Konadu as Vice-Chairperson. Currently there are over
              200 members supporting this organization through donations and
              volunteer human resources, mainly those who are interested in
              supporting rural communities and ready to contribute to their
              development. Since its establishment, the Asiri RDN has been
              supporting and significantly improved the community health centre
              among other projects in Asiri, Ghana. It has provided these rural
              dwellings with access to improved healthcare and wellbeing that
              they have been long deprived of.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
