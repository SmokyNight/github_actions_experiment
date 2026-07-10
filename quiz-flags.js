const QUIZ_FLAGS = [
  {
    title: "Afghanistan",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
  },
  {
    title: "Albania",
    image: "https://flagcdn.com/w320/al.png",
  },
  {
    title: "Algeria",
    image: "https://flagcdn.com/w320/dz.png",
  },
  {
    title: "American Samoa",
    image: "https://flagcdn.com/w320/as.png",
  },
  {
    title: "Andorra",
    image: "https://flagcdn.com/w320/ad.png",
  },
  {
    title: "Angola",
    image: "https://flagcdn.com/w320/ao.png",
  },
  {
    title: "Anguilla",
    image: "https://flagcdn.com/w320/ai.png",
  },
  {
    title: "Antarctica",
    image: "https://flagcdn.com/w320/aq.png",
  },
  {
    title: "Antigua and Barbuda",
    image: "https://flagcdn.com/w320/ag.png",
  },
  {
    title: "Argentina",
    image: "https://flagcdn.com/w320/ar.png",
  },
  {
    title: "Armenia",
    image: "https://flagcdn.com/w320/am.png",
  },
  {
    title: "Aruba",
    image: "https://flagcdn.com/w320/aw.png",
  },
  {
    title: "Australia",
    image: "https://flagcdn.com/w320/au.png",
  },
  {
    title: "Austria",
    image: "https://flagcdn.com/w320/at.png",
  },
  {
    title: "Azerbaijan",
    image: "https://flagcdn.com/w320/az.png",
  },
  {
    title: "Bahamas",
    image: "https://flagcdn.com/w320/bs.png",
  },
  {
    title: "Bahrain",
    image: "https://flagcdn.com/w320/bh.png",
  },
  {
    title: "Bangladesh",
    image: "https://flagcdn.com/w320/bd.png",
  },
  {
    title: "Barbados",
    image: "https://flagcdn.com/w320/bb.png",
  },
  {
    title: "Belarus",
    image: "https://flagcdn.com/w320/by.png",
  },
  {
    title: "Belgium",
    image: "https://flagcdn.com/w320/be.png",
  },
  {
    title: "Belize",
    image: "https://flagcdn.com/w320/bz.png",
  },
  {
    title: "Benin",
    image: "https://flagcdn.com/w320/bj.png",
  },
  {
    title: "Bermuda",
    image: "https://flagcdn.com/w320/bm.png",
  },
  {
    title: "Bhutan",
    image: "https://flagcdn.com/w320/bt.png",
  },
  {
    title: "Bolivia",
    image: "https://flagcdn.com/w320/bo.png",
  },
  {
    title: "Bosnia and Herzegovina",
    image: "https://flagcdn.com/w320/ba.png",
  },
  {
    title: "Botswana",
    image: "https://flagcdn.com/w320/bw.png",
  },
  {
    title: "Bouvet Island",
    image: "https://flagcdn.com/w320/bv.png",
  },
  {
    title: "Brazil",
    image: "https://flagcdn.com/w320/br.png",
  },
  {
    title: "British Indian Ocean Territory",
    image: "https://flagcdn.com/w320/io.png",
  },
  {
    title: "British Virgin Islands",
    image: "https://flagcdn.com/w320/vg.png",
  },
  {
    title: "Brunei",
    image: "https://flagcdn.com/w320/bn.png",
  },
  {
    title: "Bulgaria",
    image: "https://flagcdn.com/w320/bg.png",
  },
  {
    title: "Burkina Faso",
    image: "https://flagcdn.com/w320/bf.png",
  },
  {
    title: "Burundi",
    image: "https://flagcdn.com/w320/bi.png",
  },
  {
    title: "Cambodia",
    image: "https://flagcdn.com/w320/kh.png",
  },
  {
    title: "Cameroon",
    image: "https://flagcdn.com/w320/cm.png",
  },
  {
    title: "Canada",
    image: "https://flagcdn.com/w320/ca.png",
  },
  {
    title: "Cape Verde",
    image: "https://flagcdn.com/w320/cv.png",
  },
  {
    title: "Caribbean Netherlands",
    image: "https://flagcdn.com/w320/bq.png",
  },
  {
    title: "Cayman Islands",
    image: "https://flagcdn.com/w320/ky.png",
  },
  {
    title: "Central African Republic",
    image: "https://flagcdn.com/w320/cf.png",
  },
  {
    title: "Chad",
    image: "https://flagcdn.com/w320/td.png",
  },
  {
    title: "Chile",
    image: "https://flagcdn.com/w320/cl.png",
  },
  {
    title: "China",
    image: "https://flagcdn.com/w320/cn.png",
  },
  {
    title: "Christmas Island",
    image: "https://flagcdn.com/w320/cx.png",
  },
  {
    title: "Cocos (Keeling) Islands",
    image: "https://flagcdn.com/w320/cc.png",
  },
  {
    title: "Colombia",
    image: "https://flagcdn.com/w320/co.png",
  },
  {
    title: "Comoros",
    image: "https://flagcdn.com/w320/km.png",
  },
  {
    title: "Cook Islands",
    image: "https://flagcdn.com/w320/ck.png",
  },
  {
    title: "Costa Rica",
    image: "https://flagcdn.com/w320/cr.png",
  },
  {
    title: "Croatia",
    image: "https://flagcdn.com/w320/hr.png",
  },
  {
    title: "Cuba",
    image: "https://flagcdn.com/w320/cu.png",
  },
  {
    title: "Cura\u00e7ao",
    image: "https://flagcdn.com/w320/cw.png",
  },
  {
    title: "Cyprus",
    image: "https://flagcdn.com/w320/cy.png",
  },
  {
    title: "Czechia",
    image: "https://flagcdn.com/w320/cz.png",
  },
  {
    title: "Denmark",
    image: "https://flagcdn.com/w320/dk.png",
  },
  {
    title: "Djibouti",
    image: "https://flagcdn.com/w320/dj.png",
  },
  {
    title: "Dominica",
    image: "https://flagcdn.com/w320/dm.png",
  },
  {
    title: "Dominican Republic",
    image: "https://flagcdn.com/w320/do.png",
  },
  {
    title: "DR Congo",
    image: "https://flagcdn.com/w320/cd.png",
  },
  {
    title: "Ecuador",
    image: "https://flagcdn.com/w320/ec.png",
  },
  {
    title: "Egypt",
    image: "https://flagcdn.com/w320/eg.png",
  },
  {
    title: "El Salvador",
    image: "https://flagcdn.com/w320/sv.png",
  },
  {
    title: "Equatorial Guinea",
    image: "https://flagcdn.com/w320/gq.png",
  },
  {
    title: "Eritrea",
    image: "https://flagcdn.com/w320/er.png",
  },
  {
    title: "Estonia",
    image: "https://flagcdn.com/w320/ee.png",
  },
  {
    title: "Eswatini",
    image: "https://flagcdn.com/w320/sz.png",
  },
  {
    title: "Ethiopia",
    image: "https://flagcdn.com/w320/et.png",
  },
  {
    title: "Falkland Islands",
    image: "https://flagcdn.com/w320/fk.png",
  },
  {
    title: "Faroe Islands",
    image: "https://flagcdn.com/w320/fo.png",
  },
  {
    title: "Fiji",
    image: "https://flagcdn.com/w320/fj.png",
  },
  {
    title: "Finland",
    image: "https://flagcdn.com/w320/fi.png",
  },
  {
    title: "France",
    image: "https://flagcdn.com/w320/fr.png",
  },
  {
    title: "French Guiana",
    image: "https://flagcdn.com/w320/gf.png",
  },
  {
    title: "French Polynesia",
    image: "https://flagcdn.com/w320/pf.png",
  },
  {
    title: "French Southern and Antarctic Lands",
    image: "https://flagcdn.com/w320/tf.png",
  },
  {
    title: "Gabon",
    image: "https://flagcdn.com/w320/ga.png",
  },
  {
    title: "Gambia",
    image: "https://flagcdn.com/w320/gm.png",
  },
  {
    title: "Georgia",
    image: "https://flagcdn.com/w320/ge.png",
  },
  {
    title: "Germany",
    image: "https://flagcdn.com/w320/de.png",
  },
  {
    title: "Ghana",
    image: "https://flagcdn.com/w320/gh.png",
  },
  {
    title: "Gibraltar",
    image: "https://flagcdn.com/w320/gi.png",
  },
  {
    title: "Greece",
    image: "https://flagcdn.com/w320/gr.png",
  },
  {
    title: "Greenland",
    image: "https://flagcdn.com/w320/gl.png",
  },
  {
    title: "Grenada",
    image: "https://flagcdn.com/w320/gd.png",
  },
  {
    title: "Guadeloupe",
    image: "https://flagcdn.com/w320/gp.png",
  },
  {
    title: "Guam",
    image: "https://flagcdn.com/w320/gu.png",
  },
  {
    title: "Guatemala",
    image: "https://flagcdn.com/w320/gt.png",
  },
  {
    title: "Guernsey",
    image: "https://flagcdn.com/w320/gg.png",
  },
  {
    title: "Guinea",
    image: "https://flagcdn.com/w320/gn.png",
  },
  {
    title: "Guinea-Bissau",
    image: "https://flagcdn.com/w320/gw.png",
  },
  {
    title: "Guyana",
    image: "https://flagcdn.com/w320/gy.png",
  },
  {
    title: "Haiti",
    image: "https://flagcdn.com/w320/ht.png",
  },
  {
    title: "Heard Island and McDonald Islands",
    image: "https://flagcdn.com/w320/hm.png",
  },
  {
    title: "Honduras",
    image: "https://flagcdn.com/w320/hn.png",
  },
  {
    title: "Hong Kong",
    image: "https://flagcdn.com/w320/hk.png",
  },
  {
    title: "Hungary",
    image: "https://flagcdn.com/w320/hu.png",
  },
  {
    title: "Iceland",
    image: "https://flagcdn.com/w320/is.png",
  },
  {
    title: "India",
    image: "https://flagcdn.com/w320/in.png",
  },
  {
    title: "Indonesia",
    image: "https://flagcdn.com/w320/id.png",
  },
  {
    title: "Iran",
    image: "https://flagcdn.com/w320/ir.png",
  },
  {
    title: "Iraq",
    image: "https://flagcdn.com/w320/iq.png",
  },
  {
    title: "Ireland",
    image: "https://flagcdn.com/w320/ie.png",
  },
  {
    title: "Isle of Man",
    image: "https://flagcdn.com/w320/im.png",
  },
  {
    title: "Israel",
    image: "https://flagcdn.com/w320/il.png",
  },
  {
    title: "Italy",
    image: "https://flagcdn.com/w320/it.png",
  },
  {
    title: "Ivory Coast",
    image: "https://flagcdn.com/w320/ci.png",
  },
  {
    title: "Jamaica",
    image: "https://flagcdn.com/w320/jm.png",
  },
  {
    title: "Japan",
    image: "https://flagcdn.com/w320/jp.png",
  },
  {
    title: "Jersey",
    image: "https://flagcdn.com/w320/je.png",
  },
  {
    title: "Jordan",
    image: "https://flagcdn.com/w320/jo.png",
  },
  {
    title: "Kazakhstan",
    image: "https://flagcdn.com/w320/kz.png",
  },
  {
    title: "Kenya",
    image: "https://flagcdn.com/w320/ke.png",
  },
  {
    title: "Kiribati",
    image: "https://flagcdn.com/w320/ki.png",
  },
  {
    title: "Kosovo",
    image: "https://flagcdn.com/w320/xk.png",
  },
  {
    title: "Kuwait",
    image: "https://flagcdn.com/w320/kw.png",
  },
  {
    title: "Kyrgyzstan",
    image: "https://flagcdn.com/w320/kg.png",
  },
  {
    title: "Laos",
    image: "https://flagcdn.com/w320/la.png",
  },
  {
    title: "Latvia",
    image: "https://flagcdn.com/w320/lv.png",
  },
  {
    title: "Lebanon",
    image: "https://flagcdn.com/w320/lb.png",
  },
  {
    title: "Lesotho",
    image: "https://flagcdn.com/w320/ls.png",
  },
  {
    title: "Liberia",
    image: "https://flagcdn.com/w320/lr.png",
  },
  {
    title: "Libya",
    image: "https://flagcdn.com/w320/ly.png",
  },
  {
    title: "Liechtenstein",
    image: "https://flagcdn.com/w320/li.png",
  },
  {
    title: "Lithuania",
    image: "https://flagcdn.com/w320/lt.png",
  },
  {
    title: "Luxembourg",
    image: "https://flagcdn.com/w320/lu.png",
  },
  {
    title: "Macau",
    image: "https://flagcdn.com/w320/mo.png",
  },
  {
    title: "Madagascar",
    image: "https://flagcdn.com/w320/mg.png",
  },
  {
    title: "Malawi",
    image: "https://flagcdn.com/w320/mw.png",
  },
  {
    title: "Malaysia",
    image: "https://flagcdn.com/w320/my.png",
  },
  {
    title: "Maldives",
    image: "https://flagcdn.com/w320/mv.png",
  },
  {
    title: "Mali",
    image: "https://flagcdn.com/w320/ml.png",
  },
  {
    title: "Malta",
    image: "https://flagcdn.com/w320/mt.png",
  },
  {
    title: "Marshall Islands",
    image: "https://flagcdn.com/w320/mh.png",
  },
  {
    title: "Martinique",
    image: "https://flagcdn.com/w320/mq.png",
  },
  {
    title: "Mauritania",
    image: "https://flagcdn.com/w320/mr.png",
  },
  {
    title: "Mauritius",
    image: "https://flagcdn.com/w320/mu.png",
  },
  {
    title: "Mayotte",
    image: "https://flagcdn.com/w320/yt.png",
  },
  {
    title: "Mexico",
    image: "https://flagcdn.com/w320/mx.png",
  },
  {
    title: "Micronesia",
    image: "https://flagcdn.com/w320/fm.png",
  },
  {
    title: "Moldova",
    image: "https://flagcdn.com/w320/md.png",
  },
  {
    title: "Monaco",
    image: "https://flagcdn.com/w320/mc.png",
  },
  {
    title: "Mongolia",
    image: "https://flagcdn.com/w320/mn.png",
  },
  {
    title: "Montenegro",
    image: "https://flagcdn.com/w320/me.png",
  },
  {
    title: "Montserrat",
    image: "https://flagcdn.com/w320/ms.png",
  },
  {
    title: "Morocco",
    image: "https://flagcdn.com/w320/ma.png",
  },
  {
    title: "Mozambique",
    image: "https://flagcdn.com/w320/mz.png",
  },
  {
    title: "Myanmar",
    image: "https://flagcdn.com/w320/mm.png",
  },
  {
    title: "Namibia",
    image: "https://flagcdn.com/w320/na.png",
  },
  {
    title: "Nauru",
    image: "https://flagcdn.com/w320/nr.png",
  },
  {
    title: "Nepal",
    image: "https://flagcdn.com/w320/np.png",
  },
  {
    title: "Netherlands",
    image: "https://flagcdn.com/w320/nl.png",
  },
  {
    title: "New Caledonia",
    image: "https://flagcdn.com/w320/nc.png",
  },
  {
    title: "New Zealand",
    image: "https://flagcdn.com/w320/nz.png",
  },
  {
    title: "Nicaragua",
    image: "https://flagcdn.com/w320/ni.png",
  },
  {
    title: "Niger",
    image: "https://flagcdn.com/w320/ne.png",
  },
  {
    title: "Nigeria",
    image: "https://flagcdn.com/w320/ng.png",
  },
  {
    title: "Niue",
    image: "https://flagcdn.com/w320/nu.png",
  },
  {
    title: "Norfolk Island",
    image: "https://flagcdn.com/w320/nf.png",
  },
  {
    title: "North Korea",
    image: "https://flagcdn.com/w320/kp.png",
  },
  {
    title: "North Macedonia",
    image: "https://flagcdn.com/w320/mk.png",
  },
  {
    title: "Northern Mariana Islands",
    image: "https://flagcdn.com/w320/mp.png",
  },
  {
    title: "Norway",
    image: "https://flagcdn.com/w320/no.png",
  },
  {
    title: "Oman",
    image: "https://flagcdn.com/w320/om.png",
  },
  {
    title: "Pakistan",
    image: "https://flagcdn.com/w320/pk.png",
  },
  {
    title: "Palau",
    image: "https://flagcdn.com/w320/pw.png",
  },
  {
    title: "Palestine",
    image: "https://flagcdn.com/w320/ps.png",
  },
  {
    title: "Panama",
    image: "https://flagcdn.com/w320/pa.png",
  },
  {
    title: "Papua New Guinea",
    image: "https://flagcdn.com/w320/pg.png",
  },
  {
    title: "Paraguay",
    image: "https://flagcdn.com/w320/py.png",
  },
  {
    title: "Peru",
    image: "https://flagcdn.com/w320/pe.png",
  },
  {
    title: "Philippines",
    image: "https://flagcdn.com/w320/ph.png",
  },
  {
    title: "Pitcairn Islands",
    image: "https://flagcdn.com/w320/pn.png",
  },
  {
    title: "Poland",
    image: "https://flagcdn.com/w320/pl.png",
  },
  {
    title: "Portugal",
    image: "https://flagcdn.com/w320/pt.png",
  },
  {
    title: "Puerto Rico",
    image: "https://flagcdn.com/w320/pr.png",
  },
  {
    title: "Qatar",
    image: "https://flagcdn.com/w320/qa.png",
  },
  {
    title: "Republic of the Congo",
    image: "https://flagcdn.com/w320/cg.png",
  },
  {
    title: "Romania",
    image: "https://flagcdn.com/w320/ro.png",
  },
  {
    title: "Russia",
    image: "https://flagcdn.com/w320/ru.png",
  },
  {
    title: "Rwanda",
    image: "https://flagcdn.com/w320/rw.png",
  },
  {
    title: "R\u00e9union",
    image: "https://flagcdn.com/w320/re.png",
  },
  {
    title: "Saint Barth\u00e9lemy",
    image: "https://flagcdn.com/w320/bl.png",
  },
  {
    title: "Saint Helena, Ascension and Tristan da Cunha",
    image: "https://flagcdn.com/w320/sh.png",
  },
  {
    title: "Saint Kitts and Nevis",
    image: "https://flagcdn.com/w320/kn.png",
  },
  {
    title: "Saint Lucia",
    image: "https://flagcdn.com/w320/lc.png",
  },
  {
    title: "Saint Martin",
    image: "https://flagcdn.com/w320/mf.png",
  },
  {
    title: "Saint Pierre and Miquelon",
    image: "https://flagcdn.com/w320/pm.png",
  },
  {
    title: "Saint Vincent and the Grenadines",
    image: "https://flagcdn.com/w320/vc.png",
  },
  {
    title: "Samoa",
    image: "https://flagcdn.com/w320/ws.png",
  },
  {
    title: "San Marino",
    image: "https://flagcdn.com/w320/sm.png",
  },
  {
    title: "Saudi Arabia",
    image: "https://flagcdn.com/w320/sa.png",
  },
  {
    title: "Senegal",
    image: "https://flagcdn.com/w320/sn.png",
  },
  {
    title: "Serbia",
    image: "https://flagcdn.com/w320/rs.png",
  },
  {
    title: "Seychelles",
    image: "https://flagcdn.com/w320/sc.png",
  },
  {
    title: "Sierra Leone",
    image: "https://flagcdn.com/w320/sl.png",
  },
  {
    title: "Singapore",
    image: "https://flagcdn.com/w320/sg.png",
  },
  {
    title: "Sint Maarten",
    image: "https://flagcdn.com/w320/sx.png",
  },
  {
    title: "Slovakia",
    image: "https://flagcdn.com/w320/sk.png",
  },
  {
    title: "Slovenia",
    image: "https://flagcdn.com/w320/si.png",
  },
  {
    title: "Solomon Islands",
    image: "https://flagcdn.com/w320/sb.png",
  },
  {
    title: "Somalia",
    image: "https://flagcdn.com/w320/so.png",
  },
  {
    title: "South Africa",
    image: "https://flagcdn.com/w320/za.png",
  },
  {
    title: "South Georgia",
    image: "https://flagcdn.com/w320/gs.png",
  },
  {
    title: "South Korea",
    image: "https://flagcdn.com/w320/kr.png",
  },
  {
    title: "South Sudan",
    image: "https://flagcdn.com/w320/ss.png",
  },
  {
    title: "Spain",
    image: "https://flagcdn.com/w320/es.png",
  },
  {
    title: "Sri Lanka",
    image: "https://flagcdn.com/w320/lk.png",
  },
  {
    title: "Sudan",
    image: "https://flagcdn.com/w320/sd.png",
  },
  {
    title: "Suriname",
    image: "https://flagcdn.com/w320/sr.png",
  },
  {
    title: "Svalbard and Jan Mayen",
    image: "https://flagcdn.com/w320/sj.png",
  },
  {
    title: "Sweden",
    image: "https://flagcdn.com/w320/se.png",
  },
  {
    title: "Switzerland",
    image: "https://flagcdn.com/w320/ch.png",
  },
  {
    title: "Syria",
    image: "https://flagcdn.com/w320/sy.png",
  },
  {
    title: "S\u00e3o Tom\u00e9 and Pr\u00edncipe",
    image: "https://flagcdn.com/w320/st.png",
  },
  {
    title: "Taiwan",
    image: "https://flagcdn.com/w320/tw.png",
  },
  {
    title: "Tajikistan",
    image: "https://flagcdn.com/w320/tj.png",
  },
  {
    title: "Tanzania",
    image: "https://flagcdn.com/w320/tz.png",
  },
  {
    title: "Thailand",
    image: "https://flagcdn.com/w320/th.png",
  },
  {
    title: "Timor-Leste",
    image: "https://flagcdn.com/w320/tl.png",
  },
  {
    title: "Togo",
    image: "https://flagcdn.com/w320/tg.png",
  },
  {
    title: "Tokelau",
    image: "https://flagcdn.com/w320/tk.png",
  },
  {
    title: "Tonga",
    image: "https://flagcdn.com/w320/to.png",
  },
  {
    title: "Trinidad and Tobago",
    image: "https://flagcdn.com/w320/tt.png",
  },
  {
    title: "Tunisia",
    image: "https://flagcdn.com/w320/tn.png",
  },
  {
    title: "Turkey",
    image: "https://flagcdn.com/w320/tr.png",
  },
  {
    title: "Turkmenistan",
    image: "https://flagcdn.com/w320/tm.png",
  },
  {
    title: "Turks and Caicos Islands",
    image: "https://flagcdn.com/w320/tc.png",
  },
  {
    title: "Tuvalu",
    image: "https://flagcdn.com/w320/tv.png",
  },
  {
    title: "Uganda",
    image: "https://flagcdn.com/w320/ug.png",
  },
  {
    title: "Ukraine",
    image: "https://flagcdn.com/w320/ua.png",
  },
  {
    title: "United Arab Emirates",
    image: "https://flagcdn.com/w320/ae.png",
  },
  {
    title: "United Kingdom",
    image: "https://flagcdn.com/w320/gb.png",
  },
  {
    title: "United States",
    image: "https://flagcdn.com/w320/us.png",
  },
  {
    title: "United States Minor Outlying Islands",
    image: "https://flagcdn.com/w320/um.png",
  },
  {
    title: "United States Virgin Islands",
    image: "https://flagcdn.com/w320/vi.png",
  },
  {
    title: "Uruguay",
    image: "https://flagcdn.com/w320/uy.png",
  },
  {
    title: "Uzbekistan",
    image: "https://flagcdn.com/w320/uz.png",
  },
  {
    title: "Vanuatu",
    image: "https://flagcdn.com/w320/vu.png",
  },
  {
    title: "Vatican City",
    image: "https://flagcdn.com/w320/va.png",
  },
  {
    title: "Venezuela",
    image: "https://flagcdn.com/w320/ve.png",
  },
  {
    title: "Vietnam",
    image: "https://flagcdn.com/w320/vn.png",
  },
  {
    title: "Wallis and Futuna",
    image: "https://flagcdn.com/w320/wf.png",
  },
  {
    title: "Western Sahara",
    image: "https://flagcdn.com/w320/eh.png",
  },
  {
    title: "Yemen",
    image: "https://flagcdn.com/w320/ye.png",
  },
  {
    title: "Zambia",
    image: "https://flagcdn.com/w320/zm.png",
  },
  {
    title: "Zimbabwe",
    image: "https://flagcdn.com/w320/zw.png",
  },
  {
    title: "\u00c5land Islands",
    image: "https://flagcdn.com/w320/ax.png",
  },
];
