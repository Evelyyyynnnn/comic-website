import HeroAbout from "@/components/home/HeroAbout";
import { SectionTitle } from "@/components/common/SectionTitle";
import GalleryStrip from "@/components/home/GalleryStrip";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getAllThemesWithCover, getRecentPosts, exhibitions, getFeaturedWorks } from "@/data";
import { portfolioWorks } from "@/data/portfolio/works";


import evelynDesignPortfolio from "@/assets/portfolio/Evelyn-Design-Portfolio.jpg";
import jekyllTypingArtist from "@/assets/portfolio/Jekyll-typing-artist.jpg";
import evelynCarrdPortfolio from "@/assets/portfolio/evelyn-carrd-portfolio.jpg";
import lifeMovementGallery from "@/assets/portfolio/life-movement-gallery.jpg";

import g1 from "@/assets/gallery/gallery-1.jpg";
import g2 from "@/assets/gallery/gallery-2.jpg";
import g3 from "@/assets/gallery/gallery-3.jpg";
import g4 from "@/assets/gallery/gallery-4.jpg";

    // Image mapping table - using actual PNG files from cartoons folder
const imageMap: { [key: string]: string } = {
        // Portfolio images
  "portfolio/Evelyn-Design-Portfolio.jpg": evelynDesignPortfolio,
  "portfolio/Jekyll-typing-artist.jpg": jekyllTypingArtist,
  "portfolio/evelyn-carrd-portfolio.jpg": evelynCarrdPortfolio,
  "portfolio/life-movement-gallery.jpg": lifeMovementGallery,

  "gallery-1.jpg": g1,
  "gallery-2.jpg": g2,
  "gallery-3.jpg": g3,
  "gallery-4.jpg": g4,
  
  // Cartoon theme images - using public folder paths
  "cartoons/AI-Prompt/017360DA-CDB0-481C-8D3B-59ADA2D13694.png": "/cartoons/AI-Prompt/017360DA-CDB0-481C-8D3B-59ADA2D13694.png",
  "cartoons/AI-Prompt/056867F2-5B68-44B4-9E0A-A322B48E954C.png": "/cartoons/AI-Prompt/056867F2-5B68-44B4-9E0A-A322B48E954C.png",
  "cartoons/AI-Prompt/05AD0F10-8751-4399-85E1-C2575B776F50.png": "/cartoons/AI-Prompt/05AD0F10-8751-4399-85E1-C2575B776F50.png",
  "cartoons/AI-Prompt/188D701E-D4A9-4FFF-9CAC-F6F011D7F690.png": "/cartoons/AI-Prompt/188D701E-D4A9-4FFF-9CAC-F6F011D7F690.png",
  "cartoons/AI-Prompt/2094D1AF-B9FA-4550-8962-FF24FDAFC91E.png": "/cartoons/AI-Prompt/2094D1AF-B9FA-4550-8962-FF24FDAFC91E.png",
  "cartoons/AI-Prompt/21791287-CF1C-4AE8-9237-8EA102C3F42C.png": "/cartoons/AI-Prompt/21791287-CF1C-4AE8-9237-8EA102C3F42C.png",
  "cartoons/AI-Prompt/3D334A8D-8D89-416F-BDA0-A7D5F7E099CF.png": "/cartoons/AI-Prompt/3D334A8D-8D89-416F-BDA0-A7D5F7E099CF.png",
  "cartoons/AI-Prompt/40DEDE89-6AE1-4BB7-B894-C4A2BAF6D9C4.png": "/cartoons/AI-Prompt/40DEDE89-6AE1-4BB7-B894-C4A2BAF6D9C4.png",
  "cartoons/AI-Prompt/43500642-A6D1-492C-B5EB-A42270B8609E.png": "/cartoons/AI-Prompt/43500642-A6D1-492C-B5EB-A42270B8609E.png",
  "cartoons/AI-Prompt/50B391A5-3D98-4E4C-B806-3C5D5D0A6545.png": "/cartoons/AI-Prompt/50B391A5-3D98-4E4C-B806-3C5D5D0A6545.png",
  "cartoons/AI-Prompt/65210217-1538-491B-AF58-A8984D634CD9.png": "/cartoons/AI-Prompt/65210217-1538-491B-AF58-A8984D634CD9.png",
  "cartoons/AI-Prompt/7595E21C-DAC9-407B-ABFB-4F7C40D5542D.png": "/cartoons/AI-Prompt/7595E21C-DAC9-407B-ABFB-4F7C40D5542D.png",
  "cartoons/AI-Prompt/77B13207-2569-4F31-A5AC-C17650EA47BC.png": "/cartoons/AI-Prompt/77B13207-2569-4F31-A5AC-C17650EA47BC.png",
  "cartoons/AI-Prompt/7987AF1D-1262-4C84-A1A6-B12D591C9F0F.png": "/cartoons/AI-Prompt/7987AF1D-1262-4C84-A1A6-B12D591C9F0F.png",
  "cartoons/AI-Prompt/81B184B9-F3C4-411C-A3C0-446813EA7176.png": "/cartoons/AI-Prompt/81B184B9-F3C4-411C-A3C0-446813EA7176.png",
  "cartoons/AI-Prompt/887D7AAF-CD46-43B9-BAA8-F44E6EB34B56.png": "/cartoons/AI-Prompt/887D7AAF-CD46-43B9-BAA8-F44E6EB34B56.png",
  "cartoons/AI-Prompt/89EF7B2D-8DE9-4BFA-8F65-7848A19E146C.png": "/cartoons/AI-Prompt/89EF7B2D-8DE9-4BFA-8F65-7848A19E146C.png",
  "cartoons/AI-Prompt/947D3CED-1ADF-4F92-B1FB-29641F31D409.png": "/cartoons/AI-Prompt/947D3CED-1ADF-4F92-B1FB-29641F31D409.png",
  "cartoons/AI-Prompt/97BD725C-1761-4E44-B13D-3DE21FF70123.png": "/cartoons/AI-Prompt/97BD725C-1761-4E44-B13D-3DE21FF70123.png",
  "cartoons/AI-Prompt/A6142553-85E1-41B5-8812-7357E646DC63.png": "/cartoons/AI-Prompt/A6142553-85E1-41B5-8812-7357E646DC63.png",
  "cartoons/AI-Prompt/A6B72EDF-B4AB-40AF-B01D-42F2100424AF.png": "/cartoons/AI-Prompt/A6B72EDF-B4AB-40AF-B01D-42F2100424AF.png",
  "cartoons/AI-Prompt/C93F6AA7-34CE-4560-A4EE-E7E80EA15711.png": "/cartoons/AI-Prompt/C93F6AA7-34CE-4560-A4EE-E7E80EA15711.png",
  "cartoons/AI-Prompt/CA8D3475-BE54-4104-A74A-A39DD1C0153C.png": "/cartoons/AI-Prompt/CA8D3475-BE54-4104-A74A-A39DD1C0153C.png",
  "cartoons/AI-Prompt/DB2FA69A-E3FA-4BA4-AE1D-24213A6093A8.png": "/cartoons/AI-Prompt/DB2FA69A-E3FA-4BA4-AE1D-24213A6093A8.png",
  "cartoons/AI-Prompt/F039D9E9-E0E4-428A-ADBA-BB57C8A87020.png": "/cartoons/AI-Prompt/F039D9E9-E0E4-428A-ADBA-BB57C8A87020.png",
  "cartoons/AI-Prompt/F6B1D574-4C8E-4AD7-BBCE-E83865F0E84E.png": "/cartoons/AI-Prompt/F6B1D574-4C8E-4AD7-BBCE-E83865F0E84E.png",
  "cartoons/AI-Prompt/FAD250EA-BC83-43DA-80B0-30BC3F8B07BC.png": "/cartoons/AI-Prompt/FAD250EA-BC83-43DA-80B0-30BC3F8B07BC.png",
  "cartoons/AI-Prompt/30AA62A9-5CA1-4066-A9D6-39743DAD7622.png": "/cartoons/AI-Prompt/30AA62A9-5CA1-4066-A9D6-39743DAD7622.png",
  "cartoons/AI-Prompt/A3437473-4A6C-4B4C-9E6C-7E8FC487B995.png": "/cartoons/AI-Prompt/A3437473-4A6C-4B4C-9E6C-7E8FC487B995.png",
  "cartoons/AI-Prompt/E4299ADD-3D8C-4C8C-8D94-913920CC4943.png": "/cartoons/AI-Prompt/E4299ADD-3D8C-4C8C-8D94-913920CC4943.png",
  "cartoons/chinese-traditional-style/1.png": "/cartoons/chinese-traditional-style/1.png",
  "cartoons/chinese-traditional-style/2.png": "/cartoons/chinese-traditional-style/2.png",
  "cartoons/chinese-traditional-style/3.png": "/cartoons/chinese-traditional-style/3.png",
  "cartoons/chinese-traditional-style/4.png": "/cartoons/chinese-traditional-style/4.png",
  "cartoons/chinese-traditional-style/5.png": "/cartoons/chinese-traditional-style/5.png",
  "cartoons/chinese-traditional-style/6.png": "/cartoons/chinese-traditional-style/6.png",
  "cartoons/chinese-traditional-style/7.png": "/cartoons/chinese-traditional-style/7.png",
  "cartoons/chinese-traditional-style/8.png": "/cartoons/chinese-traditional-style/8.png",
  "cartoons/chinese-traditional-style/9.png": "/cartoons/chinese-traditional-style/9.png",
  "cartoons/chinese-traditional-style/14F8E2EB-70A1-4FFC-B7DE-CA156694FAB9.png": "/cartoons/chinese-traditional-style/14F8E2EB-70A1-4FFC-B7DE-CA156694FAB9.png",
  "cartoons/chinese-traditional-style/2421F0E5-B851-443E-B81D-B812411DC674.png": "/cartoons/chinese-traditional-style/2421F0E5-B851-443E-B81D-B812411DC674.png",
  "cartoons/chinese-traditional-style/33A2B244-B77C-4E45-B03F-E8AD91B5FB86.png": "/cartoons/chinese-traditional-style/33A2B244-B77C-4E45-B03F-E8AD91B5FB86.png",
  "cartoons/chinese-traditional-style/4B8F61C7-B98B-4099-B841-2C4293CA167F.png": "/cartoons/chinese-traditional-style/4B8F61C7-B98B-4099-B841-2C4293CA167F.png",
  "cartoons/chinese-traditional-style/57FDDAF2-904C-49CC-AA28-CA8115BF8AD9.png": "/cartoons/chinese-traditional-style/57FDDAF2-904C-49CC-AA28-CA8115BF8AD9.png",
  "cartoons/chinese-traditional-style/5C83A8FD-7189-4FBB-8437-D591AC535E1A.png": "/cartoons/chinese-traditional-style/5C83A8FD-7189-4FBB-8437-D591AC535E1A.png",
  "cartoons/chinese-traditional-style/67D16B98-E91A-4596-B875-E55A29DFD69E.png": "/cartoons/chinese-traditional-style/67D16B98-E91A-4596-B875-E55A29DFD69E.png",
  "cartoons/chinese-traditional-style/70024E06-A6AC-48A3-8589-F0DCA986C8D3.png": "/cartoons/chinese-traditional-style/70024E06-A6AC-48A3-8589-F0DCA986C8D3.png",
  "cartoons/chinese-traditional-style/7AD0C947-834E-4311-8745-AE70C1F45950.png": "/cartoons/chinese-traditional-style/7AD0C947-834E-4311-8745-AE70C1F45950.png",
  "cartoons/chinese-traditional-style/7C0999F8-24D0-4949-9A3E-525FD1C2D1AE.png": "/cartoons/chinese-traditional-style/7C0999F8-24D0-4949-9A3E-525FD1C2D1AE.png",
  "cartoons/chinese-traditional-style/8CD3E578-E42A-48B4-AABB-2774139D24A9.png": "/cartoons/chinese-traditional-style/8CD3E578-E42A-48B4-AABB-2774139D24A9.png",
  "cartoons/chinese-traditional-style/940898B7-CF81-4CC1-B128-D75763CE3343.png": "/cartoons/chinese-traditional-style/940898B7-CF81-4CC1-B128-D75763CE3343.png",
  "cartoons/chinese-traditional-style/B53F2170-4277-45DC-AA60-3E928AAB39F4.png": "/cartoons/chinese-traditional-style/B53F2170-4277-45DC-AA60-3E928AAB39F4.png",
  "cartoons/chinese-traditional-style/D54E7770-4F88-4715-8DE3-9C09D517EF0C.png": "/cartoons/chinese-traditional-style/D54E7770-4F88-4715-8DE3-9C09D517EF0C.png",
  "cartoons/chinese-traditional-style/D5F4CA3C-C2B4-4EB1-A17A-399EA06D5020.png": "/cartoons/chinese-traditional-style/D5F4CA3C-C2B4-4EB1-A17A-399EA06D5020.png",
  "cartoons/chinese-traditional-style/D7868A0D-D57E-442A-97CE-6174E4C218AA.png": "/cartoons/chinese-traditional-style/D7868A0D-D57E-442A-97CE-6174E4C218AA.png",
  "cartoons/chinese-traditional-style/DCC0716B-B2E9-43F3-989C-BA399D987A02.png": "/cartoons/chinese-traditional-style/DCC0716B-B2E9-43F3-989C-BA399D987A02.png",
  "cartoons/chinese-traditional-style/E43D9C7E-1E0D-46D5-97BE-D03F088D0597.png": "/cartoons/chinese-traditional-style/E43D9C7E-1E0D-46D5-97BE-D03F088D0597.png",
  "cartoons/chinese-traditional-style/F4B920FF-ADB6-4B0A-9A1B-8FC49A3CE68E.png": "/cartoons/chinese-traditional-style/F4B920FF-ADB6-4B0A-9A1B-8FC49A3CE68E.png",
  "cartoons/dating-partner/A7E45C03-BC9E-4907-8EFE-B0DF0318261B.png": "/cartoons/dating-partner/A7E45C03-BC9E-4907-8EFE-B0DF0318261B.png",
  "cartoons/finding-ins-friends/9A8F3E06-1A19-435E-BEFD-7669CB0F190B.png": "/cartoons/finding-ins-friends/9A8F3E06-1A19-435E-BEFD-7669CB0F190B.png",
  "cartoons/finding-ins-friends/0E698CE3-86D0-4CF5-B31B-559473891F6C.png": "/cartoons/finding-ins-friends/0E698CE3-86D0-4CF5-B31B-559473891F6C.png",
  "cartoons/finding-ins-friends/11870280-7FBA-4076-AB9C-75BAE2F49796.png": "/cartoons/finding-ins-friends/11870280-7FBA-4076-AB9C-75BAE2F49796.png",
  "cartoons/finding-ins-friends/6931B17E-77F0-4855-8FF1-1BF5883DEA32.png": "/cartoons/finding-ins-friends/6931B17E-77F0-4855-8FF1-1BF5883DEA32.png",
  "cartoons/finding-ins-friends/87137005-9D99-40D5-858D-171D4C805A42.png": "/cartoons/finding-ins-friends/87137005-9D99-40D5-858D-171D4C805A42.png",
  "cartoons/finding-ins-friends/8D9585A1-5A13-4BB6-ABA3-0063856BDD7A.png": "/cartoons/finding-ins-friends/8D9585A1-5A13-4BB6-ABA3-0063856BDD7A.png",
  "cartoons/finding-ins-friends/9FC5F12A-8336-4651-8C16-6F42C81B71A2.png": "/cartoons/finding-ins-friends/9FC5F12A-8336-4651-8C16-6F42C81B71A2.png",
  "cartoons/finding-ins-friends/4692A1D3-F34A-4C40-9393-BCEB14510A99.png": "/cartoons/finding-ins-friends/4692A1D3-F34A-4C40-9393-BCEB14510A99.png",
  "cartoons/international-student-nights/0C223372-9945-4FE5-8196-B0D6E9D2D65B.png": "/cartoons/international-student-nights/0C223372-9945-4FE5-8196-B0D6E9D2D65B.png",
  "cartoons/male-gaze/26820197-4667-4717-AB02-B1CA16CAD321.png": "/cartoons/male-gaze/26820197-4667-4717-AB02-B1CA16CAD321.png",
  "cartoons/roommate-experience/4C727580-81F9-4E9B-B7FE-B0541316391B.png": "/cartoons/roommate-experience/4C727580-81F9-4E9B-B7FE-B0541316391B.png",
  "cartoons/roommate-experience/8AD56EB0-9A57-4955-8778-B913DBE3F569.png": "/cartoons/roommate-experience/8AD56EB0-9A57-4955-8778-B913DBE3F569.png",
  "cartoons/roommate-experience/9DB4DEA1-C8F7-4415-B770-17154DAF3042.png": "/cartoons/roommate-experience/9DB4DEA1-C8F7-4415-B770-17154DAF3042.png",
  "cartoons/roommate-experience/C1DFBD7C-8B27-4E2F-A366-F2B0E99EBEE8.png": "/cartoons/roommate-experience/C1DFBD7C-8B27-4E2F-A366-F2B0E99EBEE8.png",
  "cartoons/roommate-experience/F4D98DC7-3EE6-4E18-B0FD-05EEF2F899A1.png": "/cartoons/roommate-experience/F4D98DC7-3EE6-4E18-B0FD-05EEF2F899A1.png",
  "cartoons/spicy-strip-culture/30AA62A9-5CA1-4066-A9D6-39743DAD7622.png": "/cartoons/spicy-strip-culture/30AA62A9-5CA1-4066-A9D6-39743DAD7622.png",
  "cartoons/study-abroad-endings/59BB25F8-0725-45FF-8C02-87FF5EDDD267.png": "/cartoons/study-abroad-endings/59BB25F8-0725-45FF-8C02-87FF5EDDD267.png",
  "cartoons/study-abroad-endings/7466338A-D3B5-458D-AE68-FEDF2B286085.png": "/cartoons/study-abroad-endings/7466338A-D3B5-458D-AE68-FEDF2B286085.png",
  "cartoons/study-abroad-endings/89E074B3-BA27-463F-9F4B-90BE0E2E6273.png": "/cartoons/study-abroad-endings/89E074B3-BA27-463F-9F4B-90BE0E2E6273.png",
  "cartoons/study-abroad-endings/F691607C-6FC3-4128-A279-423442ED7958.png": "/cartoons/study-abroad-endings/F691607C-6FC3-4128-A279-423442ED7958.png",
  "cartoons/study-abroad-endings/IMG_0057.JPG": "/cartoons/study-abroad-endings/IMG_0057.JPG",
  "cartoons/wall-street-dual-life/32B9EA22-8F17-41BA-BBFF-5453B90B875C.png": "/cartoons/wall-street-dual-life/32B9EA22-8F17-41BA-BBFF-5453B90B875C.png",
  "cartoons/wall-street-dual-life/1.png": "/cartoons/wall-street-dual-life/1.png",
  "cartoons/wall-street-dual-life/2.png": "/cartoons/wall-street-dual-life/2.png",
  "cartoons/wall-street-dual-life/3.png": "/cartoons/wall-street-dual-life/3.png",
  "cartoons/wall-street-dual-life/4.png": "/cartoons/wall-street-dual-life/4.png",
  "cartoons/wall-street-dual-life/5.png": "/cartoons/wall-street-dual-life/5.png",
  "cartoons/wall-street-dual-life/6.png": "/cartoons/wall-street-dual-life/6.png",
  "cartoons/wall-street-dual-life/7.png": "/cartoons/wall-street-dual-life/7.png",
  "cartoons/wall-street-dual-life/8.png": "/cartoons/wall-street-dual-life/8.png",
  "cartoons/wall-street-dual-life/9.png": "/cartoons/wall-street-dual-life/9.png",
  "cartoons/wall-street-dual-life/10.png": "/cartoons/wall-street-dual-life/10.png",
  "cartoons/wall-street-dual-life/11.png": "/cartoons/wall-street-dual-life/11.png",
  "cartoons/wall-street-dual-life/12.png": "/cartoons/wall-street-dual-life/12.png",
  "cartoons/wall-street-dual-life/13.png": "/cartoons/wall-street-dual-life/13.png",
  "cartoons/wall-street-dual-life/14.png": "/cartoons/wall-street-dual-life/14.png",
  "cartoons/wall-street-dual-life/15.png": "/cartoons/wall-street-dual-life/15.png",
  "cartoons/wall-street-dual-life/16.png": "/cartoons/wall-street-dual-life/16.png",
  "cartoons/wall-street-dual-life/17.png": "/cartoons/wall-street-dual-life/17.png",
  "cartoons/wall-street-dual-life/18.png": "/cartoons/wall-street-dual-life/18.png",
  "cartoons/wall-street-dual-life/19.png": "/cartoons/wall-street-dual-life/19.png",
  "cartoons/wall-street-dual-life/20.png": "/cartoons/wall-street-dual-life/20.png",
  "cartoons/wall-street-dual-life/21.png": "/cartoons/wall-street-dual-life/21.png",
  "cartoons/wall-street-dual-life/22.png": "/cartoons/wall-street-dual-life/22.png",
  "cartoons/wall-street-dual-life/23.png": "/cartoons/wall-street-dual-life/23.png",
  "cartoons/wall-street-dual-life/24.png": "/cartoons/wall-street-dual-life/24.png",
  "cartoons/wall-street-dual-life/25.png": "/cartoons/wall-street-dual-life/25.png",
  "cartoons/wall-street-dual-life/26.png": "/cartoons/wall-street-dual-life/26.png",
  "cartoons/wall-street-dual-life/27.png": "/cartoons/wall-street-dual-life/27.png",
  "cartoons/wall-street-dual-life/28.png": "/cartoons/wall-street-dual-life/28.png",
  "cartoons/wall-street-dual-life/29.png": "/cartoons/wall-street-dual-life/29.png",
  "cartoons/wall-street-dual-life/30.png": "/cartoons/wall-street-dual-life/30.png",
  "cartoons/wall-street-dual-life/31.png": "/cartoons/wall-street-dual-life/31.png",
  "cartoons/wall-street-girl-life/0090ECE5-5299-4F27-B22B-838D6FAC823A.png": "/cartoons/wall-street-girl-life/0090ECE5-5299-4F27-B22B-838D6FAC823A.png",
  "cartoons/wall-street-girl-life/01F03960-1AC4-4C54-ADD6-CAD251BEE3D9.png": "/cartoons/wall-street-girl-life/01F03960-1AC4-4C54-ADD6-CAD251BEE3D9.png",
  "cartoons/wall-street-girl-life/1A38D2A5-D59E-40AF-830F-8921ABCEA8E4.png": "/cartoons/wall-street-girl-life/1A38D2A5-D59E-40AF-830F-8921ABCEA8E4.png",
  "cartoons/wall-street-girl-life/2E78E898-F558-4E60-BE98-288D64CEFD5E.png": "/cartoons/wall-street-girl-life/2E78E898-F558-4E60-BE98-288D64CEFD5E.png",
  "cartoons/wall-street-girl-life/456717B5-FA56-453D-B900-A6134F7BF71E.png": "/cartoons/wall-street-girl-life/456717B5-FA56-453D-B900-A6134F7BF71E.png",
  "cartoons/wall-street-girl-life/46838EA2-DF4D-436A-B727-4543BF417A8B.png": "/cartoons/wall-street-girl-life/46838EA2-DF4D-436A-B727-4543BF417A8B.png",
  "cartoons/wall-street-girl-life/4B013DE9-C975-46ED-85C6-E75A4272F9B0.png": "/cartoons/wall-street-girl-life/4B013DE9-C975-46ED-85C6-E75A4272F9B0.png",
  "cartoons/wall-street-girl-life/62ED3F54-09FD-477F-A385-3FD692A6452D.png": "/cartoons/wall-street-girl-life/62ED3F54-09FD-477F-A385-3FD692A6452D.png",
  "cartoons/wall-street-girl-life/9A84214A-9E06-483C-AABD-58867AE1F659.png": "/cartoons/wall-street-girl-life/9A84214A-9E06-483C-AABD-58867AE1F659.png",
  "cartoons/wall-street-girl-life/9d874cef7e14e68b2bd54e3057c1a180.png": "/cartoons/wall-street-girl-life/9d874cef7e14e68b2bd54e3057c1a180.png",
  "cartoons/wall-street-girl-life/CC7C7A4F-19B3-48B2-ABE5-3B1EE686678B.png": "/cartoons/wall-street-girl-life/CC7C7A4F-19B3-48B2-ABE5-3B1EE686678B.png",
  "cartoons/wall-street-girl-life/D0F46C77-6F5E-40B3-914C-4A41D778E523.png": "/cartoons/wall-street-girl-life/D0F46C77-6F5E-40B3-914C-4A41D778E523.png",
  "cartoons/wall-street-girl-life/F04C2AAD-E4F4-4E30-8436-AFAA0C6ACA8D.png": "/cartoons/wall-street-girl-life/F04C2AAD-E4F4-4E30-8436-AFAA0C6ACA8D.png",
  "cartoons/wall-street-girl-life/F362C9D8-CD2F-454C-B47A-AC34CD513655.png": "/cartoons/wall-street-girl-life/F362C9D8-CD2F-454C-B47A-AC34CD513655.png",
  "cartoons/asian-market-freedom/1.png": "/cartoons/asian-market-freedom/1.png",
  "cartoons/asian-market-freedom/2.png": "/cartoons/asian-market-freedom/2.png",
  "cartoons/asian-market-freedom/3.png": "/cartoons/asian-market-freedom/3.png",
  "cartoons/asian-market-freedom/4.png": "/cartoons/asian-market-freedom/4.png",
  "cartoons/boy-dare/1.png": "/cartoons/boy-dare/1.png",
  "cartoons/boy-dare/2.png": "/cartoons/boy-dare/2.png",
  "cartoons/boy-dare/3.png": "/cartoons/boy-dare/3.png",
  "cartoons/dating-partner/1.png": "/cartoons/dating-partner/1.png",
  "cartoons/dual-life-WSJ/1.png": "/cartoons/dual-life-WSJ/1.png",
  "cartoons/ins-connection/1.png": "/cartoons/ins-connection/1.png",

  "cartoons/roommate/1.png": "/cartoons/roommate/1.png",
  // New themes added
  "cartoons/spicy-strip-culture/30AA62A9-5CA1-4066-A9D6-39743DAD7622.png": "/cartoons/spicy-strip-culture/30AA62A9-5CA1-4066-A9D6-39743DAD7622.png",
  "cartoons/wall-street-dual-life/1.png": "/cartoons/wall-street-dual-life/1.png",
  "cartoons/wall-street-dual-life/2.png": "/cartoons/wall-street-dual-life/2.png",
  "cartoons/wall-street-dual-life/3.png": "/cartoons/wall-street-dual-life/3.png",
  "cartoons/wall-street-dual-life/4.png": "/cartoons/wall-street-dual-life/4.png",
  "cartoons/wall-street-dual-life/5.png": "/cartoons/wall-street-dual-life/5.png",
  "cartoons/wall-street-dual-life/6.png": "/cartoons/wall-street-dual-life/6.png",
  "cartoons/wall-street-dual-life/7.png": "/cartoons/wall-street-dual-life/7.png",
  "cartoons/wall-street-dual-life/8.png": "/cartoons/wall-street-dual-life/8.png",
  "cartoons/wall-street-dual-life/9.png": "/cartoons/wall-street-dual-life/9.png",
  "cartoons/wall-street-dual-life/10.png": "/cartoons/wall-street-dual-life/10.png",
  "cartoons/wall-street-dual-life/11.png": "/cartoons/wall-street-dual-life/11.png",
  "cartoons/wall-street-dual-life/12.png": "/cartoons/wall-street-dual-life/12.png",
  "cartoons/wall-street-dual-life/13.png": "/cartoons/wall-street-dual-life/13.png",
  "cartoons/wall-street-dual-life/14.png": "/cartoons/wall-street-dual-life/14.png",
  "cartoons/wall-street-dual-life/15.png": "/cartoons/wall-street-dual-life/15.png",
  "cartoons/wall-street-dual-life/16.png": "/cartoons/wall-street-dual-life/16.png",
  "cartoons/wall-street-dual-life/17.png": "/cartoons/wall-street-dual-life/17.png",
  "cartoons/wall-street-dual-life/18.png": "/cartoons/wall-street-dual-life/18.png",
  "cartoons/wall-street-dual-life/19.png": "/cartoons/wall-street-dual-life/19.png",
  "cartoons/wall-street-dual-life/20.png": "/cartoons/wall-street-dual-life/20.png",
  "cartoons/wall-street-dual-life/21.png": "/cartoons/wall-street-dual-life/21.png",
  "cartoons/wall-street-dual-life/22.png": "/cartoons/wall-street-dual-life/22.png",
  "cartoons/wall-street-dual-life/23.png": "/cartoons/wall-street-dual-life/23.png",
  "cartoons/wall-street-dual-life/24.png": "/cartoons/wall-street-dual-life/24.png",
  "cartoons/wall-street-dual-life/25.png": "/cartoons/wall-street-dual-life/25.png",
  "cartoons/wall-street-dual-life/26.png": "/cartoons/wall-street-dual-life/26.png",
  "cartoons/wall-street-dual-life/27.png": "/cartoons/wall-street-dual-life/27.png",
  "cartoons/wall-street-dual-life/28.png": "/cartoons/wall-street-dual-life/28.png",
  "cartoons/wall-street-dual-life/29.png": "/cartoons/wall-street-dual-life/29.png",
  "cartoons/wall-street-dual-life/30.png": "/cartoons/wall-street-dual-life/30.png",
  "cartoons/wall-street-dual-life/31.png": "/cartoons/wall-street-dual-life/31.png"
};

const steps = [
  { step: 1, title: "Observation & Inspiration", desc: "Capture creative inspiration from daily life, social phenomena, and character stories" },
  { step: 2, title: "Conception & Design", desc: "Determine themes, design character models, conceive plot and scene composition" },
  { step: 3, title: "Drawing & Creation", desc: "Use lines, colors, and stylized techniques to transform concepts into visual works" },
  { step: 4, title: "Refinement & Expression", desc: "Adjust details, strengthen theme expression, and allow the work to convey deeper meaning" },
];

const blogPosts = [
  {
    id: "medium-blog",
    title: "Medium Blog",
    description: "Personal thoughts and insights on art, design, and creative process",
    platform: "Medium",
    category: "Blog Platform",
    url: "https://medium.com/@15723668499dwk",
    icon: "📝",
    coverImage: "/src/assets/blog/Medium.jpg"
  },
  {
    id: "bento-portfolio",
    title: "Bento Portfolio",
    description: "Creative portfolio showcasing diverse artistic projects and achievements",
    platform: "Bento",
    category: "Portfolio",
    url: "https://bento.me/linda-lin",
    icon: "🎨",
    coverImage: "/src/assets/blog/Bento.jpg"
  },
  {
    id: "english-blog",
    title: "English Blog Site",
    description: "English-language content focusing on art, culture, and personal experiences",
    platform: "Vercel",
    category: "Blog",
    url: "https://evelyn-english-post-site.vercel.app/",
    icon: "🌍",
    coverImage: "/src/assets/blog/English-Post-Site.jpg"
  },
  {
    id: "video-site",
    title: "Video Portfolio",
    description: "Collection of video projects and multimedia creative works",
    platform: "GitHub Pages",
    category: "Video",
    url: "https://evelyyyynnnn.github.io/Evelyn-Video-Site/",
    icon: "🎬",
    coverImage: "/src/assets/blog/video.jpg"
  },
  {
    id: "korean-book",
    title: "Korean Book Project",
    description: "Specialized project focused on Korean literature and cultural content",
    platform: "Netlify",
    category: "Cultural",
    url: "https://korean-book.netlify.app/",
    icon: "📚",
    coverImage: "/src/assets/blog/Korean.jpg"
  }
];

// Blog data will be imported from the new data structure

// Exhibition data will be imported from the new data structure

const Index = () => {
  const [showAllThemes, setShowAllThemes] = useState(false);
  
  return (
    <div className="bg-background">
      <h1 className="sr-only">Artist Portfolio — Comics & Illustration</h1>
      <section id="about">
        <HeroAbout />
      </section>

      <section id="process" className="py-16 md:py-28 bg-accent/30">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Creative Process</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {steps.map((s) => (
            <Card key={s.step} className="shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105 p-6">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <CardTitle className="text-3xl font-bold text-white">{String(s.step).padStart(2, '0')}</CardTitle>
                </div>
                <CardDescription className="text-xl font-bold text-foreground">{s.title}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-base leading-relaxed">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="cartoon" className="py-14 md:py-24">
        <SectionTitle text="Cartoon" />
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getAllThemesWithCover()
            .slice(0, showAllThemes ? undefined : 3)
            .map((theme) => (
            <Card key={theme.id} className="overflow-hidden shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105 group">
              <div className="relative">
                <div className="overflow-hidden bg-gray-50 flex items-center justify-center" style={{ minHeight: '224px' }}>
                  <img 
                    src={imageMap[theme.coverImage] || theme.coverImage} 
                    alt={`${theme.title} cover`} 
                    loading="lazy" 
                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground">
                    {theme.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {theme.imageCount} images
                  </span>
                </div>
                <Link to={`/cartoon/${theme.id}`}>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors cursor-pointer">
                    {theme.title}
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-2">
                    {theme.description}
                  </CardDescription>
                </Link>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="container mx-auto mt-8 flex justify-center">
          <Button 
            variant="outline" 
            onClick={() => setShowAllThemes(!showAllThemes)}
            className="hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {showAllThemes ? "Show Less" : "View All Themes"}
          </Button>
        </div>
      </section>

      <section id="blog" className="py-14 md:py-24">
        <SectionTitle text="Blog" />
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105 group">
              <div className="relative">
                <div className="overflow-hidden" style={{ minHeight: '200px' }}>
                  <img 
                    src={post.coverImage} 
                    alt={`${post.title} cover`} 
                    loading="lazy" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-sm line-clamp-2">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{post.category}</span>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="group-hover:bg-primary group-hover:text-white transition-colors"
                    onClick={() => window.open(post.url, '_blank')}
                  >
                    Visit Site
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="exhibitions" className="py-14 md:py-24">
        <SectionTitle text="Exhibitions" />
        <div className="container mx-auto grid gap-4">
          {exhibitions.map((exhibition) => (
            <Card key={exhibition.id} className="shadow-soft">
              <CardHeader className="flex flex-row items-start gap-6">
                <div className="text-xl font-playfair text-[hsl(var(--brand-1))] min-w-16">{exhibition.year}</div>
                <div>
                  <CardTitle className="text-lg">"{exhibition.title}"</CardTitle>
                  <CardDescription>{exhibition.venue}, {exhibition.city}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section id="portfolio" className="py-14 md:py-24 bg-accent/30">
        <SectionTitle text="Portfolio" />
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioWorks.map((work) => (
            <Card key={work.id} className="overflow-hidden shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105 group">
              <div className="relative">
                <div className="overflow-hidden" style={{ minHeight: '200px' }}>
                  <img 
                    src={imageMap[work.image] || work.image} 
                    alt={work.alt} 
                    loading="lazy" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                  {work.title}
                </CardTitle>
                <CardDescription className="text-sm line-clamp-2">
                  {work.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{work.category}</span>
                  {work.projectUrl && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="group-hover:bg-primary group-hover:text-white transition-colors"
                      onClick={() => window.open(work.projectUrl, '_blank')}
                    >
                      Visit Site
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="gallery" className="py-14 md:py-24 bg-accent/30">
        <SectionTitle text="Gallery" />
        <GalleryStrip items={[{src:g1,alt:'Gallery 1'},{src:g2,alt:'Gallery 2'},{src:g3,alt:'Gallery 3'},{src:g4,alt:'Gallery 4'}]} />
      </section>
    </div>
  );
};

export default Index;
