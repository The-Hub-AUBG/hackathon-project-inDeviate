import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { motion } from 'framer-motion';

import { logOutUser } from '../../store/actions/authActions';
import './styles.css';

const svgVariant = {
  hidden: {
    rotate: -10,
  },
  visible: {
    rotate: 0,
    transition: {
      duration: 1,
    },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

const Navbar = ({ auth, logOutUser, history }) => {
  const onLogOut = (event) => {
    event.preventDefault();
    logOutUser(history);
  };

  return (
    <nav className="navbar">
      <h2 className="logo">
        <motion.svg
          variants={svgVariant}
          initial="hidden"
          animate="visible"
          className="project-logo"
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="480.000000pt"
          height="814.000000pt"
          viewBox="0 0 480.000000 814.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <metadata>Created by potrace 1.16, written by Peter Selinger 2001-2019</metadata>
          <g
            transform="translate(0.000000,814.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
          >
            <motion.path
              variants={pathVariants}
              d="M1468 7903 c-9 -10 -42 -61 -73 -113 -32 -52 -70 -114 -86 -137 -16
-23 -29 -44 -29 -47 0 -3 370 -6 823 -6 627 0 826 3 835 12 23 23 12 50 -46
111 -32 34 -84 92 -116 130 l-58 67 -618 0 c-575 0 -618 -1 -632 -17z"
            />
            <motion.path
              variants={pathVariants}
              d="M1287 6463 c-2 -779 -5 -894 -19 -938 -27 -85 -55 -143 -139 -281
-44 -74 -93 -166 -109 -205 -17 -39 -40 -88 -52 -108 -42 -68 -381 -566 -500
-734 -153 -214 -179 -259 -227 -382 -51 -129 -54 -143 -91 -430 -30 -230 -31
-254 -30 -590 1 -368 9 -525 35 -665 14 -72 109 -487 160 -699 18 -77 79 -186
232 -414 62 -93 113 -174 113 -179 0 -5 15 -28 33 -51 19 -23 44 -59 56 -79
37 -62 201 -187 428 -327 247 -153 428 -224 602 -237 82 -6 89 -5 94 12 4 15
5 16 6 2 1 -19 20 -22 246 -41 83 -6 245 -12 360 -11 203 0 216 2 385 38 96
20 198 46 225 58 154 64 238 98 303 122 129 49 606 411 710 539 214 264 412
553 412 603 0 9 20 64 44 123 39 92 50 134 81 321 55 329 57 600 9 1030 -23
210 -39 274 -146 598 -93 282 -109 321 -233 572 -74 149 -158 307 -188 352
-30 46 -63 99 -72 118 -10 19 -105 125 -211 235 -294 306 -377 414 -471 612
-25 53 -59 115 -74 138 -52 78 -111 236 -138 375 -27 134 -33 229 -40 600 -7
317 -12 427 -30 557 -12 89 -27 181 -34 205 -13 42 -14 43 -60 46 l-47 3 1
-323 c1 -563 26 -1019 59 -1080 5 -9 14 -47 20 -85 6 -37 20 -97 32 -133 26
-81 129 -334 168 -409 15 -31 126 -175 246 -321 119 -146 256 -317 303 -380
47 -63 117 -150 155 -193 94 -104 179 -218 220 -297 40 -76 190 -512 247 -720
91 -332 143 -642 141 -850 -1 -317 -21 -701 -41 -800 -43 -217 -86 -304 -259
-529 -312 -406 -524 -586 -875 -744 -221 -100 -432 -159 -667 -189 -130 -16
-581 -17 -773 -1 -145 12 -294 51 -329 85 -9 9 -41 21 -72 28 -126 26 -238
106 -487 348 -58 57 -128 130 -155 162 -27 33 -54 60 -60 60 -17 0 -118 156
-175 269 -55 110 -110 268 -133 381 -8 41 -22 94 -30 118 -21 59 -34 134 -51
307 -8 83 -19 179 -25 215 -5 36 -13 211 -16 390 -5 272 -4 341 10 422 9 54
16 147 16 207 0 130 17 235 66 402 76 262 137 376 337 624 64 80 191 278 254
396 29 54 85 147 125 208 95 143 156 249 180 314 36 93 107 390 120 501 12
106 13 108 50 142 l38 34 258 3 c141 1 305 1 365 0 l107 -2 -1 67 c-1 37 -4
78 -8 92 l-7 25 -379 5 -380 5 0 70 c0 95 0 95 240 95 l191 0 2 104 1 103 -37
7 c-20 3 -128 6 -239 6 l-203 0 0 113 c0 75 4 117 12 125 9 9 87 12 290 12
l278 0 0 95 0 95 -288 0 c-211 0 -291 3 -300 12 -19 19 -16 202 4 222 13 14
57 16 325 16 l309 0 0 85 0 85 -400 0 -399 0 -4 -887z"
            />
            <motion.path
              variants={pathVariants}
              d="M2272 4901 c-23 -11 -67 -44 -96 -73 -47 -47 -57 -65 -86 -153 -18
-55 -41 -116 -50 -135 -21 -41 -745 -762 -787 -783 -15 -8 -62 -18 -105 -22
-68 -6 -81 -10 -117 -42 -60 -51 -81 -98 -81 -180 0 -129 35 -191 132 -233 89
-38 259 -20 309 33 51 54 69 102 79 208 11 119 20 155 52 207 32 52 634 664
667 679 24 10 35 8 80 -13 69 -32 184 -33 250 -4 24 11 51 20 60 20 26 0 112
-63 326 -239 456 -374 462 -379 485 -497 14 -72 44 -129 83 -158 58 -43 219
-30 319 26 94 53 91 262 -4 332 -31 22 -88 26 -214 13 l-81 -9 -119 90 c-65
50 -156 123 -201 164 -45 40 -151 134 -235 209 -170 151 -202 186 -276 309
-109 182 -195 260 -295 267 -37 3 -64 -2 -95 -16z"
            />
            <motion.path
              variants={pathVariants}
              d="M3185 2064 c-127 -12 -208 -29 -279 -59 -45 -18 -106 -40 -136 -50
-30 -10 -119 -49 -198 -88 -177 -87 -213 -93 -304 -49 -205 98 -630 194 -855
193 -135 -1 -237 -20 -307 -59 -66 -37 -87 -77 -93 -185 -6 -94 14 -160 70
-240 37 -52 175 -175 226 -202 19 -9 83 -48 143 -86 160 -100 292 -146 582
-205 169 -34 202 -31 291 29 38 26 76 47 84 47 8 0 53 -20 100 -44 115 -58
162 -69 253 -56 183 25 364 77 487 140 161 81 347 251 460 419 67 102 81 139
81 226 -1 99 -50 178 -135 216 -76 33 -352 64 -470 53z m307 -132 c87 -39 128
-103 128 -199 0 -77 -35 -146 -118 -228 -194 -194 -347 -280 -666 -376 -149
-45 -161 -47 -187 -33 -40 20 -45 52 -17 105 16 32 24 65 26 120 5 93 -13 163
-69 268 -43 81 -44 88 -28 125 28 61 428 199 694 240 62 9 195 -3 237 -22z
m-1902 -23 c170 -21 335 -63 499 -127 121 -48 129 -59 100 -143 -43 -124 -36
-296 17 -394 29 -56 30 -65 3 -99 -18 -23 -28 -26 -78 -26 -56 0 -97 10 -291
72 -227 73 -476 200 -584 299 -73 67 -121 151 -134 233 -9 54 -8 59 19 96 36
49 74 69 163 85 90 17 178 18 286 4z m884 -291 c45 -53 60 -104 53 -183 -7
-99 -73 -195 -132 -195 -31 0 -84 46 -101 87 -20 46 -17 131 5 202 42 136 106
169 175 89z"
            />
          </g>
        </motion.svg>{' '}
        inDeviate
      </h2>
      <ul className="nav-links flex-1">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        {auth.isAuthenticated ? (
          <>
            <li className="nav-item">
              <Link to="/users">Users</Link>
            </li>
            <li className="nav-item">
              <Link to={`/${auth.me.username}`}>Profile</Link>
            </li>
            {auth.me?.role === 'ADMIN' && (
              <li className="nav-item">
                <Link to="/admin">Admin</Link>
              </li>
            )}
            <li className="flex-1" />
            <Link to={`/${auth.me.username}`}>
              <img className="avatar" src={auth.me.avatar} />
            </Link>

            <li className="nav-item log-out" onClick={onLogOut}>
              <a href="#">Log out</a>
            </li>
          </>
        ) : (
          <>
            <li className="flex-1" />

            <li className="nav-item log-in">
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default compose(withRouter, connect(mapStateToProps, { logOutUser }))(Navbar);
