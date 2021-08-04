import "./styles.css";
//import Menubar from "../../MenubarItemLinks"
import { useEffect } from "react";

function DropdownMenu() {
  // useEffect(() => {
  //   const menubar = new Menubar(document.getElementById("menubar1"));
  //   menubar.init();
  // }, []);
  return (
    <nav aria-label="Mythical University">
      <ul id="menubar1" role="menubar" aria-label="Mythical University">
        <li role="none">
          <a
            role="menuitem"
            aria-haspopup="true"
            aria-expanded="false"
            href="#"
            tabIndex="0"
          >
            About
          </a>
          <ul role="menu" aria-label="About">
            <li role="none">
              <a role="menuitem" href="mb-about.html#overview" tabIndex="-1">
                Overview
              </a>
            </li>
            <li role="none">
              <a role="menuitem" href="mb-about.html#admin" tabIndex="-1">
                Administration
              </a>
            </li>
            <li role="none">
              <a
                id="menubar113"
                role="menuitem"
                href="#"
                aria-haspopup="true"
                aria-expanded="false"
                tabIndex="-1"
              >
                Facts
              </a>
              <ul role="menu" aria-label="Facts">
                <li role="none">
                  <a role="menuitem" href="mb-about.html#facts" tabIndex="-1">
                    History
                  </a>
                </li>
                <li role="none">
                  <a role="menuitem" href="mb-about.html#facts" tabIndex="-1">
                    Current Statistics
                  </a>
                </li>
                <li role="none">
                  <a role="menuitem" href="mb-about.html#facts" tabIndex="-1">
                    Awards
                  </a>
                </li>
              </ul>
            </li>
            <li role="none">
              <a
                role="menuitem"
                href="#"
                aria-haspopup="true"
                aria-expanded="false"
                tabIndex="-1"
              >
                Campus Tours
              </a>
              <ul role="menu" aria-label="Campus Tours">
                <li role="none">
                  <a role="menuitem" href="mb-about.html#tours" tabIndex="-1">
                    For prospective students
                  </a>
                </li>
                <li role="none">
                  <a role="menuitem" href="mb-about.html#tours" tabIndex="-1">
                    For alumni
                  </a>
                </li>
                <li role="none">
                  <a role="menuitem" href="mb-about.html#tours" tabIndex="-1">
                    For visitors
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li role="none">
          <a
            role="menuitem"
            aria-haspopup="true"
            aria-expanded="false"
            href="#"
            tabIndex="-1"
          >
            Admissions
          </a>
          <ul role="menu" aria-label="Admissions">
            <li role="none">
              <a role="menuitem" href="mb-admissions.html#apply" tabIndex="-1">
                Apply
              </a>
            </li>
            <li role="none">
              <a
                role="menuitem"
                href="#"
                aria-haspopup="true"
                aria-expanded="false"
                tabIndex="-1"
              >
                Tuition
              </a>
              <ul role="menu" aria-label="Tuition Information">
                <li role="none">
                  <a
                    role="menuitem"
                    href="mb-admissions.html#tuition"
                    tabIndex="-1"
                  >
                    Undergraduate
                  </a>
                </li>
                <li role="none">
                  <a
                    role="menuitem"
                    href="mb-admissions.html#tuition"
                    tabIndex="-1"
                  >
                    Graduate
                  </a>
                </li>
                <li role="none">
                  <a
                    role="menuitem"
                    href="mb-admissions.html#tuition"
                    tabIndex="-1"
                  >
                    Professional Schools
                  </a>
                </li>
              </ul>
            </li>
            <li role="none">
              <a role="menuitem" href="mb-admissions.html#signup" tabIndex="-1">
                Sign Up
              </a>
            </li>
            <li role="separator"></li>
            <li role="none">
              <a role="menuitem" href="mb-admissions.html#visit" tabIndex="-1">
                Visit
              </a>
            </li>
            <li role="none">
              <a role="menuitem" href="mb-admissions.html#photo" tabIndex="-1">
                Photo Tour
              </a>
            </li>
            <li role="none">
              <a
                role="menuitem"
                href="mb-admissions.html#connect"
                tabIndex="-1"
              >
                Connect
              </a>
            </li>
          </ul>
        </li>
        <li role="none">
          <a
            role="menuitem"
            aria-haspopup="true"
            aria-expanded="false"
            href="#"
            tabIndex="-1"
          >
            Academics
          </a>
          <ul role="menu" aria-label="Academics">
            <li role="none">
              <a
                role="menuitem"
                href="mb-academics.html#colleges"
                tabIndex="-1"
              >
                Colleges & Schools
              </a>
            </li>
            <li role="none">
              <a
                role="menuitem"
                href="mb-academics.html#programs"
                tabIndex="-1"
              >
                Programs of Study
              </a>
            </li>
            <li role="none">
              <a role="menuitem" href="mb-academics.html#honors" tabIndex="-1">
                Honors Programs
              </a>
            </li>
            <li role="none">
              <a role="menuitem" href="mb-academics.html#online" tabIndex="-1">
                Online Courses
              </a>
            </li>
            <li role="separator"></li>
            <li role="none">
              <a
                role="menuitem"
                href="mb-academics.html#explorer"
                tabIndex="-1"
              >
                Course Explorer
              </a>
            </li>
            <li role="none">
              <a
                role="menuitem"
                href="mb-academics.html#register"
                tabIndex="-1"
              >
                Register for Class
              </a>
            </li>
            <li role="none">
              <a
                role="menuitem"
                href="mb-academics.html#academic"
                tabIndex="-1"
              >
                Academic Calendar
              </a>
            </li>
            <li role="none">
              <a
                role="menuitem"
                href="mb-academics.html#tanscripts"
                tabIndex="-1"
              >
                Transcripts
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default DropdownMenu;
