import React from "react";
import logo from "";

const Navigation = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navItems: [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "About",
          link: "/about",
        },
        {
          name: "Contact",
          link: "/contact",
        },
        {
          name: "Stories",
          link: "/stories",
        },
      ],
    };
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  }

  render() {
    return (
      <div className="bg-t-teal shadow-md">
        <div className="max-w-7xl mx-auto p-6 sm:px-6">
          <nav
            className="relative flex items-center justify-between sm:h-10 md:justify-center"
            aria-label="Global"
          >
            <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <Link to="/">
                  <span className="sr-only">Almost home</span>
                  <img
                    src={logo}
                    className="h-8 w-auto sm:h-10"
                    alt="logo - heart with a house in the center"
                  />
                </Link>
                <div className="-mr-2 flex items-center md:hidden">
                  <button
                    type="button"
                    className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden md:flex md:space-x-10">
              {this.state.navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className={this.active ? "active-link" : "link"}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
        <div className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <img
                  className="h-8 w-auto"
                  src={logo}
                  alt="logo - heart with a house in the center"
                />
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3">
              {this.state.navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className={this.active ? "active-link" : "link"}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Navigation;
