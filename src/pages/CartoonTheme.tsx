import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Share2 } from "lucide-react";
import { SectionTitle } from "@/components/common/SectionTitle";
import { getThemeById, getRelatedThemes } from "@/data";
import { useState } from "react";


// Import all images
import evelynDesignPortfolio from "@/assets/portfolio/Evelyn-Design-Portfolio.jpg";
import jekyllTypingArtist from "@/assets/portfolio/Jekyll-typing-artist.jpg";
import evelynCarrdPortfolio from "@/assets/portfolio/evelyn-carrd-portfolio.jpg";
import lifeMovementGallery from "@/assets/portfolio/life-movement-gallery.jpg";
import mediumBlog from "@/assets/blog/Medium.jpg";
import bentoPortfolio from "@/assets/blog/Bento.jpg";
import englishBlog from "@/assets/blog/English-Post-Site.jpg";
import videoSite from "@/assets/blog/video.jpg";
import koreanBook from "@/assets/blog/Korean.jpg";
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
  
  // Blog images
  "blog/Medium.jpg": mediumBlog,
  "blog/Bento.jpg": bentoPortfolio,
  "blog/English-Post-Site.jpg": englishBlog,
  "blog/video.jpg": videoSite,
  "blog/Korean.jpg": koreanBook,
  
  // Gallery images
  "gallery/gallery-1.jpg": g1,
  "gallery/gallery-2.jpg": g2,
  "gallery/gallery-3.jpg": g3,
  "gallery/gallery-4.jpg": g4,
  
  // Cartoon theme images - using actual PNG files
  // AI-Prompt theme images
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
  
  // Seasons in Tea theme images (using original chinese-traditional-style paths)
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
  "cartoons/chinese-traditional-style/33A2B244-B77C-4E45-B03F-E8AD91B5FB86.png": "/cartoons/chinese-traditional-style/33A2B244-B77C-4E45-B03F-E8AD91B5FB86.png",
  "cartoons/chinese-traditional-style/F4B920FF-ADB6-4B0A-9A1B-8FC49A3CE68E.png": "/cartoons/chinese-traditional-style/F4B920FF-ADB6-4B0A-9A1B-8FC49A3CE68E.png",
  "cartoons/chinese-traditional-style/B53F2170-4277-45DC-AA60-3E928AAB39F4.png": "/cartoons/chinese-traditional-style/B53F2170-4277-45DC-AA60-3E928AAB39F4.png",
  "cartoons/chinese-traditional-style/D54E7770-4F88-4715-8DE3-9C09D517EF0C.png": "/cartoons/chinese-traditional-style/D54E7770-4F88-4715-8DE3-9C09D517EF0C.png",
  "cartoons/chinese-traditional-style/D5F4CA3C-C2B4-4EB1-A17A-399EA06D5020.png": "/cartoons/chinese-traditional-style/D5F4CA3C-C2B4-4EB1-A17A-399EA06D5020.png",
  "cartoons/chinese-traditional-style/D7868A0D-D57E-442A-97CE-6174E4C218AA.png": "/cartoons/chinese-traditional-style/D7868A0D-D57E-442A-97CE-6174E4C218AA.png",
  "cartoons/chinese-traditional-style/DCC0716B-B2E9-43F3-989C-BA399D987A02.png": "/cartoons/chinese-traditional-style/DCC0716B-B2E9-43F3-989C-BA399D987A02.png",
  "cartoons/chinese-traditional-style/E43D9C7E-1E0D-46D5-97BE-D03F088D0597.png": "/cartoons/chinese-traditional-style/E43D9C7E-1E0D-46D5-97BE-D03F088D0597.png",
  "cartoons/chinese-traditional-style/F4B920FF-ADB6-4B0A-9A1B-8FC49A3CE68E.png": "/cartoons/chinese-traditional-style/F4B920FF-ADB6-4B0A-9A1B-8FC49A3CE68E.png",
  
  // Other theme images (add more as needed)
  // Dating Objects theme images
  "cartoons/dating-partner/A7E45C03-BC9E-4907-8EFE-B0DF0318261B.png": "/cartoons/dating-partner/A7E45C03-BC9E-4907-8EFE-B0DF0318261B.png",
  "cartoons/dating-partner/IMG_0065.JPG": "/cartoons/dating-partner/IMG_0065.JPG",
  "cartoons/dating-partner/IMG_0066.JPG": "/cartoons/dating-partner/IMG_0066.JPG",
  "cartoons/dating-partner/IMG_0067.JPG": "/cartoons/dating-partner/IMG_0067.JPG",
  "cartoons/dating-partner/IMG_0068.JPG": "/cartoons/dating-partner/IMG_0068.JPG",
  // Finding Instagram Friends theme images
  "cartoons/finding-ins-friends/0E698CE3-86D0-4CF5-B31B-559473891F6C.png": "/cartoons/finding-ins-friends/0E698CE3-86D0-4CF5-B31B-559473891F6C.png",
  "cartoons/finding-ins-friends/11870280-7FBA-4076-AB9C-75BAE2F49796.png": "/cartoons/finding-ins-friends/11870280-7FBA-4076-AB9C-75BAE2F49796.png",
  "cartoons/finding-ins-friends/4692A1D3-F34A-4C40-9393-BCEB14510A99.png": "/cartoons/finding-ins-friends/4692A1D3-F34A-4C40-9393-BCEB14510A99.png",
  "cartoons/finding-ins-friends/6931B17E-77F0-4855-8FF1-1BF5883DEA32.png": "/cartoons/finding-ins-friends/6931B17E-77F0-4855-8FF1-1BF5883DEA32.png",
  "cartoons/finding-ins-friends/87137005-9D99-40D5-858D-171D4C805A42.png": "/cartoons/finding-ins-friends/87137005-9D99-40D5-858D-171D4C805A42.png",
  "cartoons/finding-ins-friends/8D9585A1-5A13-4BB6-ABA3-0063856BDD7A.png": "/cartoons/finding-ins-friends/8D9585A1-5A13-4BB6-ABA3-0063856BDD7A.png",
  "cartoons/finding-ins-friends/9A8F3E06-1A19-435E-BEFD-7669CB0F190B.png": "/cartoons/finding-ins-friends/9A8F3E06-1A19-435E-BEFD-7669CB0F190B.png",
  "cartoons/finding-ins-friends/9FC5F12A-8336-4651-8C16-6F42C81B71A2.png": "/cartoons/finding-ins-friends/9FC5F12A-8336-4651-8C16-6F42C81B71A2.png",
  "cartoons/finding-ins-friends/FD08F5ED-4E0E-494C-9DD4-BAF486C10CB9.png": "/cartoons/finding-ins-friends/FD08F5ED-4E0E-494C-9DD4-BAF486C10CB9.png",
  
  // Roommate Experience theme images
  "cartoons/roommate-experience/4C727580-81F9-4E9B-B7FE-B0541316391B.png": "/cartoons/roommate-experience/4C727580-81F9-4E9B-B7FE-B0541316391B.png",
  "cartoons/roommate-experience/8AD56EB0-9A57-4955-8778-B913DBE3F569.png": "/cartoons/roommate-experience/8AD56EB0-9A57-4955-8778-B913DBE3F569.png",
  "cartoons/roommate-experience/9DB4DEA1-C8F7-4415-B770-17154DAF3042.png": "/cartoons/roommate-experience/9DB4DEA1-C8F7-4415-B770-17154DAF3042.png",
  "cartoons/roommate-experience/C1DFBD7C-8B27-4E2F-A366-F2B0E99EBEE8.png": "/cartoons/roommate-experience/C1DFBD7C-8B27-4E2F-A366-F2B0E99EBEE8.png",
  "cartoons/roommate-experience/F4D98DC7-3EE6-4E18-B0FD-05EEF2F899A1.png": "/cartoons/roommate-experience/F4D98DC7-3EE6-4E18-B0FD-05EEF2F899A1.png",
  
  // Study Abroad Endings theme images
  "cartoons/study-abroad-endings/59BB25F8-0725-45FF-8C02-87FF5EDDD267.png": "/cartoons/study-abroad-endings/59BB25F8-0725-45FF-8C02-87FF5EDDD267.png",
  "cartoons/study-abroad-endings/7466338A-D3B5-458D-AE68-FEDF2B286085.png": "/cartoons/study-abroad-endings/7466338A-D3B5-458D-AE68-FEDF2B286085.png",
  "cartoons/study-abroad-endings/89E074B3-BA27-463F-9F4B-90BE0E2E6273.png": "/cartoons/study-abroad-endings/89E074B3-BA27-463F-9F4B-90BE0E2E6273.png",
  "cartoons/study-abroad-endings/F691607C-6FC3-4128-A279-423442ED7958.png": "/cartoons/study-abroad-endings/F691607C-6FC3-4128-A279-423442ED7958.png",
  "cartoons/study-abroad-endings/IMG_0057.JPG": "/cartoons/study-abroad-endings/IMG_0057.JPG",
  
  // Wall Street Girl Life theme images
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
  
  // Asian Market Freedom theme images
  "cartoons/asian-market-freedom/1.png": "/cartoons/asian-market-freedom/1.png",
  "cartoons/asian-market-freedom/2.png": "/cartoons/asian-market-freedom/2.png",
  "cartoons/asian-market-freedom/3.png": "/cartoons/asian-market-freedom/3.png",
  "cartoons/asian-market-freedom/4.png": "/cartoons/asian-market-freedom/4.png",
  "cartoons/international-student-nights/0C223372-9945-4FE5-8196-B0D6E9D2D65B.png": "/cartoons/international-student-nights/0C223372-9945-4FE5-8196-B0D6E9D2D65B.png",
  "cartoons/male-gaze/26820197-4667-4717-AB02-B1CA16CAD321.png": "/cartoons/male-gaze/26820197-4667-4717-AB02-B1CA16CAD321.png",
  "cartoons/roommate-experience/4C727580-81F9-4E9B-B7FE-B0541316391B.png": "/cartoons/roommate-experience/4C727580-81F9-4E9B-B7FE-B0541316391B.png",
  "cartoons/spicy-strip-culture/30AA62A9-5CA1-4066-A9D6-39743DAD7622.png": "/cartoons/spicy-strip-culture/30AA62A9-5CA1-4066-A9D6-39743DAD7622.png",
  "cartoons/study-abroad-endings/59BB25F8-0725-45FF-8C02-87FF5EDDD267.png": "/cartoons/study-abroad-endings/59BB25F8-0725-45FF-8C02-87FF5EDDD267.png",
  "cartoons/wall-street-dual-life/32B9EA22-8F17-41BA-BBFF-5453B90B875C.png": "/cartoons/wall-street-dual-life/32B9EA22-8F17-41BA-BBFF-5453B90B875C.png",
  "cartoons/wall-street-girl-life/0090ECE5-5299-4F27-B22B-838D6FAC823A.png": "/cartoons/wall-street-girl-life/0090ECE5-5299-4F27-B22B-838D6FAC823A.png",
  "cartoons/asian-market-freedom/1.png": "/cartoons/asian-market-freedom/1.png",
  "cartoons/boy-dare/1.png": "/cartoons/boy-dare/1.png",
  "cartoons/boy-dare/2.png": "/cartoons/boy-dare/2.png",
  "cartoons/boy-dare/3.png": "/cartoons/boy-dare/3.png",
  "cartoons/dating-partner/1.png": "/cartoons/dating-partner/1.png",
  "cartoons/dual-life-WSJ/1.png": "/cartoons/dual-life-WSJ/1.png",
  "cartoons/ins-connection/1.png": "/cartoons/ins-connection/1.png",

  "cartoons/roommate/1.png": "/cartoons/roommate/1.png",
  
  // AI-Prompt theme images
  "cartoons/AI-Prompt/F039D9E9-E0E4-428A-ADBA-BB57C8A87020.png": "/cartoons/AI-Prompt/F039D9E9-E0E4-428A-ADBA-BB57C8A87020.png",
  "cartoons/AI-Prompt/017360DA-CDB0-481C-8D3B-59ADA2D13694.png": "/cartoons/AI-Prompt/017360DA-CDB0-481C-8D3B-59ADA2D13694.png",
  "cartoons/AI-Prompt/0A1B2C3D-4E5F-6789-ABCD-EF0123456789.png": "/cartoons/AI-Prompt/0A1B2C3D-4E5F-6789-ABCD-EF0123456789.png",
  "cartoons/AI-Prompt/1A2B3C4D-5E6F-7890-ABCD-EF1234567890.png": "/cartoons/AI-Prompt/1A2B3C4D-5E6F-7890-ABCD-EF1234567890.png",
  "cartoons/AI-Prompt/2B3C4D5E-6F7G-8901-BCDE-F23456789012.png": "/cartoons/AI-Prompt/2B3C4D5E-6F7G-8901-BCDE-F23456789012.png",
  "cartoons/AI-Prompt/3C4D5E6F-7G8H-9012-CDEF-345678901234.png": "/cartoons/AI-Prompt/3C4D5E6F-7G8H-9012-CDEF-345678901234.png",
  "cartoons/AI-Prompt/4D5E6F7G-8H9I-0123-DEFG-456789012345.png": "/cartoons/AI-Prompt/4D5E6F7G-8H9I-0123-DEFG-456789012345.png",
  "cartoons/AI-Prompt/5E6F7G8H-9I0J-1234-EFGH-567890123456.png": "/cartoons/AI-Prompt/5E6F7G8H-9I0J-1234-EFGH-567890123456.png",
  "cartoons/AI-Prompt/6F7G8H9I-0J1K-2345-FGHI-678901234567.png": "/cartoons/AI-Prompt/6F7G8H9I-0J1K-2345-FGHI-678901234567.png",
  "cartoons/AI-Prompt/7G8H9I0J-1K2L-3456-GHIJ-789012345678.png": "/cartoons/AI-Prompt/7G8H9I0J-1K2L-3456-GHIJ-789012345678.png",
  "cartoons/AI-Prompt/8H9I0J1K-2L3M-4567-HIJK-890123456789.png": "/cartoons/AI-Prompt/8H9I0J1K-2L3M-4567-HIJK-890123456789.png",
  "cartoons/AI-Prompt/9I0J1K2L-3M4N-5678-IJKL-901234567890.png": "/cartoons/AI-Prompt/9I0J1K2L-3M4N-5678-IJKL-901234567890.png",
  "cartoons/AI-Prompt/0J1K2L3M-4N5O-6789-JKLM-012345678901.png": "/cartoons/AI-Prompt/0J1K2L3M-4N5O-6789-JKLM-012345678901.png",
  "cartoons/AI-Prompt/1K2L3M4N-5O6P-7890-KLMN-123456789012.png": "/cartoons/AI-Prompt/1K2L3M4N-5O6P-7890-KLMN-123456789012.png",
  "cartoons/AI-Prompt/2L3M4N5O-6P7Q-8901-LMNO-234567890123.png": "/cartoons/AI-Prompt/2L3M4N5O-6P7Q-8901-LMNO-234567890123.png",
  "cartoons/AI-Prompt/3M4N5O6P-7Q8R-9012-MNOP-345678901234.png": "/cartoons/AI-Prompt/3M4N5O6P-7Q8R-9012-MNOP-345678901234.png",
  "cartoons/AI-Prompt/4N5O6P7Q-8R9S-0123-NOPQ-456789012345.png": "/cartoons/AI-Prompt/4N5O6P7Q-8R9S-0123-NOPQ-456789012345.png",
  "cartoons/AI-Prompt/5O6P7Q8R-9S0T-1234-OPQR-567890123456.png": "/cartoons/AI-Prompt/5O6P7Q8R-9S0T-1234-OPQR-567890123456.png",
  "cartoons/AI-Prompt/6P7Q8R9S-0T1U-2345-PQRS-678901234567.png": "/cartoons/AI-Prompt/6P7Q8R9S-0T1U-2345-PQRS-678901234567.png",
  "cartoons/AI-Prompt/7Q8R9S0T-1U2V-3456-QRST-789012345678.png": "/cartoons/AI-Prompt/7Q8R9S0T-1U2V-3456-QRST-789012345678.png",
  "cartoons/AI-Prompt/8R9S0T1U-2V3W-4567-RSTU-890123456789.png": "/cartoons/AI-Prompt/8R9S0T1U-2V3W-4567-RSTU-890123456789.png",
  "cartoons/AI-Prompt/9S0T1U2V-3W4X-5678-STUV-901234567890.png": "/cartoons/AI-Prompt/9S0T1U2V-3W4X-5678-STUV-901234567890.png",
  "cartoons/AI-Prompt/0T1U2V3W-4X5Y-6789-TUVW-012345678901.png": "/cartoons/AI-Prompt/0T1U2V3W-4X5Y-6789-TUVW-012345678901.png",
  "cartoons/AI-Prompt/1U2V3W4X-5Y6Z-7890-UVWX-123456789012.png": "/cartoons/AI-Prompt/1U2V3W4X-5Y6Z-7890-UVWX-123456789012.png",
  "cartoons/AI-Prompt/2V3W4X5Y-6Z7A-8901-VWXY-234567890123.png": "/cartoons/AI-Prompt/2V3W4X5Y-6Z7A-8901-VWXY-234567890123.png",
  "cartoons/AI-Prompt/3W4X5Y6Z-7A8B-9012-WXYZ-345678901234.png": "/cartoons/AI-Prompt/3W4X5Y6Z-7A8B-9012-WXYZ-345678901234.png",
  
  // Spicy Strip Culture theme images
  "cartoons/spicy-strip-culture/30AA62A9-5CA1-4066-A9D6-39743DAD7622.png": "/cartoons/spicy-strip-culture/30AA62A9-5CA1-4066-A9D6-39743DAD7622.png",
  "cartoons/spicy-strip-culture/4B8F61C7-B98B-4099-B841-2C4293CA167F.png": "/cartoons/spicy-strip-culture/4B8F61C7-B98B-4099-B841-2C4293CA167F.png",
  "cartoons/spicy-strip-culture/5C83A8FD-7189-4FBB-8437-D591AC535E1A.png": "/cartoons/spicy-strip-culture/5C83A8FD-7189-4FBB-8437-D591AC535E1A.png",
  "cartoons/spicy-strip-culture/67D16B98-E91A-4596-B875-E55A29DFD69E.png": "/cartoons/spicy-strip-culture/67D16B98-E91A-4596-B875-E55A29DFD69E.png",
  
  // Wall Street Dual Life theme images
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

const CartoonTheme = () => {
  const { themeId } = useParams<{ themeId: string }>();
  const theme = getThemeById(themeId || "");
  const [isFavorite, setIsFavorite] = useState(false);

  if (!theme) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Theme Not Found</h1>
        <Link to="/">
                      <Button>Back to Home</Button>
        </Link>
      </div>
    );
  }

  const relatedThemes = getRelatedThemes(theme.id, 3);

  return (
    <div className="bg-background min-h-screen">
      {/* Theme Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
            <span className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">
              {theme.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-playfair mb-4 max-w-4xl">
            {theme.title}
          </h1>
          
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
            {theme.description}
          </p>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>Author: {theme.author}</span>
            <span>Publish Date: {theme.publishDate}</span>
            <span>{theme.images.length} images</span>
          </div>
          
          <div className="flex items-center gap-4 mt-6">
            <Button 
              variant="outline" 
              size="sm" 
              className="gap-2 hover:bg-red-50 hover:border-red-200 transition-colors"
              onClick={() => {
                // 这里可以添加收藏逻辑
                const button = event?.target as HTMLElement;
                if (button) {
                  button.classList.toggle('bg-red-500');
                  button.classList.toggle('text-white');
                  button.classList.toggle('border-red-500');
                }
              }}
            >
              <svg 
                className="w-4 h-4" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              Favorite
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Share2 className="w-4 h-4" />
              Share
            </Button>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="container mx-auto py-8">
        <div className="flex flex-wrap gap-2">
          {theme.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm rounded-full bg-accent text-accent-foreground hover:bg-accent/80 transition-colors cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Image Display */}
      <div className="container mx-auto py-8">
        <SectionTitle text="Comic Content" />
        

        
        {theme.id === "dating-objects" ? (
          // Special dating profile cards for dating-objects theme
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {theme.images.map((image) => (
              <Card key={image.id} className="overflow-hidden shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105">
                <div className="bg-gray-50 flex items-center justify-center" style={{ minHeight: '300px' }}>
                  <img
                    src={imageMap[image.src] || image.src}
                    alt={image.alt}
                    className="max-w-full max-h-full object-contain hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold mb-3 text-center">
                    {image.caption}
                  </CardTitle>
                  
                  {/* Character Bio */}
                  {image.bio && (
                    <div className="mb-3">
                      <p className="text-sm text-muted-foreground italic">"{image.bio}"</p>
                    </div>
                  )}
                  
                  {/* Looking For */}
                  {image.lookingFor && (
                    <div className="mb-3">
                      <p className="text-xs font-semibold text-primary mb-1">Looking for:</p>
                      <p className="text-sm text-muted-foreground">{image.lookingFor}</p>
                    </div>
                  )}
                  
                  {/* Fun Fact */}
                  {image.funFact && (
                    <div className="mb-3">
                      <p className="text-xs font-semibold text-primary mb-1">Fun fact:</p>
                      <p className="text-sm text-muted-foreground">{image.funFact}</p>
                    </div>
                  )}
                  
                  {/* Character Tags */}
                  {image.tags && image.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {image.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs rounded-full bg-secondary/50 text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </CardHeader>
              </Card>
            ))}
          </div>
        ) : (
          // Standard image display for other themes
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {theme.images.map((image) => (
              <Card key={image.id} className="overflow-hidden shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105">
                <div className="bg-gray-50 flex items-center justify-center" style={{ minHeight: '300px' }}>
                  <img
                    src={imageMap[image.src] || image.src}
                    alt={image.alt}
                    className="max-w-full max-h-full object-contain hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold text-foreground mb-2">
                    {image.caption}
                  </CardTitle>
                  {image.alt && image.alt !== image.caption && (
                    <p className="text-sm text-muted-foreground">
                      {image.alt}
                    </p>
                  )}
                </CardHeader>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Related Themes */}
      {relatedThemes.length > 0 && (
        <div className="bg-accent/30 py-16">
          <div className="container mx-auto">
                          <SectionTitle text="Related Themes" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedThemes.map((relatedTheme) => (
                <Link key={relatedTheme.id} to={`/cartoon/${relatedTheme.id}`}>
                  <Card className="overflow-hidden shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105 cursor-pointer">
                    <div className="bg-gray-50 flex items-center justify-center" style={{ minHeight: '200px' }}>
                      <img
                        src={imageMap[relatedTheme.coverImage] || relatedTheme.coverImage}
                        alt={relatedTheme.title}
                        className="max-w-full max-h-full object-contain hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground">
                          {relatedTheme.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {relatedTheme.images.length} images
                        </span>
                      </div>
                      <CardTitle className="text-lg leading-tight">
                        {relatedTheme.title}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartoonTheme;
