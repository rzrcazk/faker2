/*
粉丝福利红包
活动链接：https://wqs.jd.com/sns/202109/22/fansactiveall/index.html?qwer=<活动id>
环境变量：jd_fansDraw_activityUrl // 活动链接
        jd_fansDraw_Notify // 是否推送通知（true/false），默认不推送

注：活动非百分百中奖，请勿重复运行

cron:1 1 1 1 *
============Quantumultx===============
[task_local]
#粉丝福利红包
1 1 1 1 * jd_fansDraw.js, tag=粉丝福利红包, enabled=true

*/

const $ = new Env('粉丝福利红包')
var version_='jsjiami.com.v7';const IlllllII=ii1iiili;(function(IiliI1I,Illlil11,Iil1ll1I,iIIIi11i,l1IiIiII,iiIII1i,l111IlIl){return IiliI1I=IiliI1I>>0x8,iiIII1i='hs',l111IlIl='hs',function(lillllIi,iIIlil,iI1i11Ii,lI1I1i11,iilIl111){const IIi1il1l=ii1iiili;lI1I1i11='tfi',iiIII1i=lI1I1i11+iiIII1i,iilIl111='up',l111IlIl+=iilIl111,iiIII1i=iI1i11Ii(iiIII1i),l111IlIl=iI1i11Ii(l111IlIl),iI1i11Ii=0x0;const i1III1Il=lillllIi();while(!![]&&--iIIIi11i+iIIlil){try{lI1I1i11=-parseInt(IIi1il1l(0x21c,'xheB'))/0x1*(parseInt(IIi1il1l(0x180,'[hN3'))/0x2)+-parseInt(IIi1il1l(0x11a,'[hN3'))/0x3+parseInt(IIi1il1l(0x188,'Bk$P'))/0x4+-parseInt(IIi1il1l(0x1ce,'w^rC'))/0x5*(-parseInt(IIi1il1l(0x1b5,'nxsw'))/0x6)+parseInt(IIi1il1l(0x1d9,'o&&q'))/0x7*(-parseInt(IIi1il1l(0x10f,'aV$B'))/0x8)+parseInt(IIi1il1l(0x139,'Yt05'))/0x9+parseInt(IIi1il1l(0x1df,'0*(U'))/0xa*(parseInt(IIi1il1l(0x16f,'6PrD'))/0xb);}catch(llIIIill){lI1I1i11=iI1i11Ii;}finally{iilIl111=i1III1Il[iiIII1i]();if(IiliI1I<=iIIIi11i)iI1i11Ii?l1IiIiII?lI1I1i11=iilIl111:l1IiIiII=iilIl111:iI1i11Ii=iilIl111;else{if(iI1i11Ii==l1IiIiII['replace'](/[ebArWyGTJhPgKqYukHd=]/g,'')){if(lI1I1i11===iIIlil){i1III1Il['un'+iiIII1i](iilIl111);break;}i1III1Il[l111IlIl](iilIl111);}}}}}(Iil1ll1I,Illlil11,function(ili1Ilii,IIIl1IIl,iIiIIIli,IIllil1i,I11iilIl,I11Ilili,IllIill1){return IIIl1IIl='\x73\x70\x6c\x69\x74',ili1Ilii=arguments[0x0],ili1Ilii=ili1Ilii[IIIl1IIl](''),iIiIIIli=`\x72\x65\x76\x65\x72\x73\x65`,ili1Ilii=ili1Ilii[iIiIIIli]('\x76'),IIllil1i=`\x6a\x6f\x69\x6e`,(0x13d640,ili1Ilii[IIllil1i](''));});}(0xc300,0x745ee,lIiIlI,0xc5),lIiIlI)&&(version_=lIiIlI);const Iiilil11=require(IlllllII(0x1ef,'qVt&')),lililIiI=require(IlllllII(0x192,'ZdUF')),iiii1Iil=require(IlllllII(0x1a3,'Hb[S')),iI11iIl1=process['env'][IlllllII(0x20a,'JI$b')]||'',II11I1Ii=process[IlllllII(0x19f,'xr$0')][IlllllII(0x161,'N]@3')]==='true',Ii1II11=IlllllII(0x142,'n%QM');function lIiIlI(){const I1I1ii1l=(function(){return[...[version_,'ujTGsrWyjbGeiPraJqmgiK.ekcHheomGWu.Avd7Y==','vSoFyaVcMCoxWOldMCkfAW','W6PeWOezobf4ja','W4ZcM3lcHhCzrXWimCo9WQ/cHCo/WRTIqSkSzHanqCkHWR/cN8keW5hcUCoEW65PW6K','W51zWOHdW70FvttcMCoZWOtdUSkE','W6PTWQStfG','q8kAW45wWPa','xt/dSColesv/BNRcV8kBq8orWPJdKmkhBSo5W4CzWPW','WR9cWP7cIWq','x0tcLaG','W71FWPOACwrUlCovWQLwqKtcQIBcJ8kx','W6RcRSoGW4q5jmobWQFcTmkssW','aSoSnghcPq','5REo5yUZ5AA95zgh77Yg','4P6aloI2HowmToAxMoAwGW','g8kFzbVcV8owWPK','WQtcUxOoferh','WPixWO/dNcJcNW','W7hdTG3dM+IUOoAWQ+wLV+I3SE+/KoIVHUAHIoADVUE8SUI1JEMhO+ISKq','W6LVW53cGmoX','xd8AW5L2','WOnLWPfJDInIWR08tCkyWOpdTW','W67dGIJdUZnu','WRRdHrtcNmoZ','WONJG47MTjpLIlxLP7BLK6tJG54','zSkvgd/cQG','W6GDW6KqoW','W4ZcMgBdUSor','k8oXwmoDWQjHq8kqW4j6oSkFEqxdJCknEHFdUSo4q2va','ASo1WQO3WQbtWQBdLX7cVmoCte90ACkYg8ovW6W','h8oIW5tdIs0','AgnohW','mmoqfmoZuq','iulcIa4S','e0lcJbud','dSkvWQDVWPeuvq','5y+/6igG5P6T5OUj5lUd','W5RcLNRdNmoq','W4pdJSoCbfe','eCoelxpcQSkVaq','EYFdK8owmG','rmkLoeWz','4PQWWR3ORBdLOj/LHBFMOypLV5pMR5ZNOz3NMBdLJAxPH60','WQ3cJMNcKvW9W507Dh7dRmowWO0','WPKxWPu','WPtcGSkGW4FdOG','WRlcQuZdHmoHxmkT','xuRcNG','hSoepG','exhcTbSs','4PICbEITIEwIUEweR+AHKow/REATOoEJNEEyNoMtKoAoOG','WQVcHMpcQxa','ymkZlt3cV2rOCuaBWR7dGf7dGCoJW5hcSM3dJSkWma','BZT6W4/cUW','xYhdVCojoG9W','W5vlW5RcT8oo','lCo6ya','WP4FW7/cSSoc','Euy2','W6XpWPXyW6W','W7y1W7qRa8kQW4rOxt5oWPxdHMK','WQ0rW5VcTSop','f2BcGCo0oCk+Eha','W6FdGSo2nG','5lMy5lQ85PY/5yM75zQ76l6z5zQD56I35PEO5OYE','h8okkq','kmkWWQ92WRK','qtSBW5LYW7Kz','ECkhW43dVL8','W6LFWPaHfW','FmoYW6a','DeOLgMOmW6WkW70G','W5myWRyncM9lW5BdHtRdLCoxWPKpW6q','5lI85lIh5PYr5yMN5zQ46l+J5zIK56Mw5PED5O6J','CSoOW6WeWPG','lCkWWPL3WP4','D3DgcmoNhSoFW4PWW63dLqhcVCobB8k6eSkRW7eGya','mxlcMH/dVG','DCkjW6DiWPa','W4FcQgC','WPmxWPldId3cKgC','xHjrW73cIG','W4BJGjZMTPNLIAVLNiJLNOVJGQq','z8kCW7dcLbyVW6mMW47cGG','W7y1W649lq','jSolDdjTWRiIWPy3WRvlwqK','W5FdICo6meBdHhnO','WQeQkSoWW6CaW4XlW6lcLCo2c8kE','ESoif1fFW5lcTCkAW5TgWOnWW4NdGxOmzSonWRiSW6RcIqfDW7L7W53dLSozWQxcS8oeW7m4W6XjW71JWPqDW7vGW4mCu8krvmkhh8oXqwlcRYJcV8oHW6H6W5W/C8kQWPFdRLdcLCohDSoEAmo/WPu6WPFdJSkHWOi2kXBcUerfFebMaSkPBqpdOLWErNldGCkZn8oLW4lcLcWEvCk/WOVdRmoHbCoBWQu5WOGlW70GAZ4ZW7ShWPJcH8k3bMa6EGfbW5ZcG8oRW6NdJCovWPyIhCo3vmosBSkyW5RcNSkHW4OcnSomW5ekWRK2WPa','rd7dOmojg0aXiN7cUSkcqComWPpcK8kAl8oHW4jfWOBdGxKOW6LBW6NdPKLue2XWrGFcUuWUzmowr8os','WRvQWR/cIrq','WQLfW6hcU3S','5y+d6ik35P6+5OIe5lMf','kmo7zmoxWRzRvCkN','tSkkW5xdV3VdKu8','WOhdHJtdPGi','WOJdNXRdVdq','WRFdNIu','hM5EWP0QWQHps8kvi8kNxGS','WOebW7y8xMapW4VcKsm','W4hdMmorceu','WPCnWPddH8od','W5hcQ1BcRdS','WOBcMCk6W7FdJmoLdmkdx8oP'],...(function(){return[...['iwFcGCoNa8k6','WQ4eWRBdVmoT','WRhcJwhcN08XW7a','WRddGs/dNW0','W7zkWPq','W4tcI8oAW4O+','WPqBWPddGW4','WQbJW4u','c8oLW6pdUbK','dSkiWQ9LWO4','sIpdRa','W7fbWQTmW6O','g8oIaCoSuCk8W4m','FSkqjG','rr7dPCovda','WQO8WPNdVXK','5BwO5OQy6lY0','W7dcJLRdTmoAqmklDNbg','lmoXW57dJJy','W7i/W64CcCkRW5S','bmkwW4S','W5VcT0ZdMCob','W5ryW4VcKxBdNqG','dSo0W7pdHXG','W5BcLeVdJ8oN','W6xcG2JcO2rzF8kqWQzZW6pdUGa','WPtdOmkQ','WOz5W5BcSK4','W4rQW53cScVcPrBcPXVdPmk2WOxcNa','5P2u6iYX5y2m5yQn5Psn5O+dfEITLUMgToAvNoI9LUIIVa','x0RdLa7dLIqg','WQ0CWQJdRCoI','WOiSWOFdLCoV','W5iCW40Dha','qtNdT8kmuej6o2RdOW','5y6h6ice5P6g5OUX5lIV','CSkLW67cIqK4','W5q2W4yKigyQWPiEsmkFWPK','wCois2VdLG','WQ3dHCkUWRCG','W7CfW7S0cW','WP1hW5xcRuO','p8k2patcL8oNeSoZW64mrK5d','uCkoW5S','WQTcWPBcHJ7dNwlcKqHVh35PoSkXrmkgpSo8WPO','qSowWOy','jw/cJCo2w8o/CxddUmkiE2a3tCkBW793','4PMhC+ITIEwIKUweK+AGLUw9N+ATMoEGTEEzPowoGEMeUW','i3fYvLW9WPGz','FCo6W6KdWOK','WPBdQmkoWPmL','zmo1W7eMWQO','nSosW5hdRIO','lmoWDmoiWQjOvq','5lUl5lU65P+g5yQH5zQE6l6P5zUL56U35PwE5O2p','e1VcVJ7dSa','W75YF8kTWP5wWPDj','C1S+hwGGW7yx','WOpcT1aphW','WOVcLCkP','WRyGWQddJYK','mMFcJCo8eG','t8ofn216','eCoudL1DW5VcOSouWOjvWOf2WOBdT0ylBSokWRLiWR7cSYfTW6qJWQVdNCoxWQFcUSkgW50iWQDf','W75FWPvsW64','W4hcO1/dNSo0W7FcVudcGu/dS8kIW5/dLSousSk2kW','W5vJW7BcGCoH','6Agr5yYe5AsI6lwB','tuSHo3u','vv/cKsddKdireCoYW4GCWOFdIG','4P2DW6BOTA7LJRJMLkBMLBm','W65TW5RcL8ou','WPFcSSkwW6FdSq','FKWOaa','W7XmWOS','vqztW4JcOq','iSkkW70BEa','k+s6REwoQUMfKaRdU8odnCk8W7nwWOqSyrfNW5fgj8o6WQ/cL8kQnmooWR0ZWReNi8oxkN3cImkBWOpcTSkmW65+D8oMW4tcHSoSWPLiW5KKW7ijWPhdRv/cJmojertdH8ofawTgWRlcOmouWQnjFCoMnHLfistdUmkwyCkghs3cO8kAWQfgW6C7W47dQ05oyWOLWOGoWOhdIx8Lca','tt0CW4nLW7Ciwmkye8ke','W4xcKGpcQ8kcfq47W54','WRvyW5RcSI/cKhVcJuXrg2r/BmkWfSoeCCk3','WP7dPSk1','dooaKUA0MowlKUwNIowsGoocUG','W4CMW7KycW','WRpdJCo7g0NdNhW','W7XSWOrbW68','FmkPW6j9WPa','zrXsW7tcOCkPjG','FCkJjIJcSLm','WPVdTHBdVdO','z18zbuS','WQBdR3pcKCky','mmoIW5BdVXW','WRpcV8kMW73dNa','WRZdKI7dOtyokW','WRxdMdpdTW','hw1CWP8IWQ5oACkhc8kBDYC','u1Ghg1O','5lIV5lUc5PYL5yI85zUi6l+X5zIr56MP5PwZ5O2l','WOanW7O','WO8DWPVdQM4','WOFdG0dcS8kJoq','zCkoB2K6WQXWWR0G','4PY+W5NOVBdNQyFOJRxLJR3ML5hMJPdKUAzFbwldV+kDMKhML7JMJQlOJOFLJyhMRkFLUQ/dNSk/gCoB','WObUWPLLDYjIWQCJxmkjWOddQa'],...(function(){return['zSkKiIxcQW','sHOsW4vW','WQNcQmkSW6NdSq','W7pcRehdP8of','zI48W411','WPNdHuhcQCkYkIy','ECkPW7hcJG0TW4i','W6eKW58ybCkR','W5VcGetdN8oM','sCojWQ11WPGEt8oKqu/dMCkbBmohW6uEWP7cL3S','lNRcGW','bM7cNJtdVG','W4i7W4CWkhH0WQbuumkAW4ddGCoYdW','qq5dW7FcQG','F8oNzfFdGCk8','W6PeWOezoa','ECkSW6rqWPxdISkpWQ1aEG1VW6S','W4HsWReqgG','f8kuWQj6WPm','W57cVSoXW58blmoyWRS','WPK+WOxdOwJdUG','vX5XW6ZcHa','WOlcLmk4','W7eqW4eWnG','f8ktWQLmWOC','W7Dpw8kpWQO','i8kPBeBdGmkYvCoWW5KGjN9ekmkfsKvBWPiJACk5wG','W4BcRMVdLmoX','W6eIW6Kscq','phpcTW','FCoNFLVdGmkWtmo8','WOSfW7ysuW','W4lcJMJcHYXggcadj8o5W7y','emoumCoDCq','B8obsgpdJW','W7hcN8oqW5WO','qdepW69HW6W','8ykmQri','ydz9vKm','WPmYWPm','CavuW6RcH8kzjSkf','44kb5O6a56A644g56k6B5yAn6iYy5y+xEWDaWPldMMK','hSowkq','8lcoRmkE6Agu5y2G5OM85yM9','jCo+WRVdIvT/WP8ZW7VcLSkZW6ddPW','W7y1W7q9hSkPW79GsGLcWPZdH2Ky','W5bkW5NcL8oehG','WPJdJ1u','W7C5W7G','WPq4W5FcICoyxZ4','8jUqTCkN56Io5Ro6','W6FcOSoZW6G9pW','yCoPBq','lc0j','B2uKk34','Crjp','ymkZW6C','fCoHnhFcJa','WQL0WOFcMHq','WRhcVNWrna','6Agk5y+A5OQY5yMC','WPaIW6VcRmoR','WRBcN2dcLq','o8k3zb/cJq','cCkEWRL5WRm','wJvyxvy','iSkKWRzgW5HlW6tdLwRcKSokthy','WPygWPxdIY/dJs0eaL5jW7tcMZ7cQSkYWPVcQ8oU','F8k+c2Gp','WQSqWRSDbs1ihq','WOTgW63cI08','E8ksW4rEWQi','WP3dJLBcV8kR','WQfPW5hcSfNcRmoq','xSkoW5ldQuddGW','W6/cU0BdUSoutq','WRNcVwq','WOO2W43cISoRttu','W544W48','eSoPW70','W785W4tcUulcVCoFW7C','5RAH5yQn5yAw5y6j772h','4PI6bEISHowGGEwhHoAHUow8HEASQ+EJNEEzGEMtIEAoKW','WPNcTMFcIMm','FCo0y0NdIW','fSoJbhdcOG','DcBdKmk0rSoVChddS8kZCKy','W5HBWOvyW6W','DMnrcCo7','o8kqW78AsG','WRVcVxq','WOuWW5xcQCoz','WQPLW5O','j0qpWRhdGSoSESkPWRLSW5KoW7W','W4NcIgJcGYO','W4pdI8o3jf0','f8oqiCotrG','W75zB8kSWP4','pmorimoOwa','qdep','WO0zWOJdIW7cGMW','F0VdOW'];}())];}())];}());lIiIlI=function(){return I1I1ii1l;};return lIiIlI();};let I11l1li='';const I11liiiI=Object[IlllllII(0x169,'8l0V')](Iiilil11)[IlllllII(0x21e,'xD%#')](IlIIliII=>Iiilil11[IlIIliII])[IlllllII(0x144,'nxsw')](i1iIiIIi=>i1iIiIIi);!I11liiiI[0x0]&&($['msg']($['name'],IlllllII(0x1b2,'w7o$')),process['exit'](0x1));!(async()=>{const iillIlii=IlllllII,Ili1IIli={'OhbRU':function(li11I11i,llIlIII){return li11I11i===llIlIII;},'AHjzK':iillIlii(0x1fc,'o&&q'),'UuCPy':'账号无效','FqVhF':function(iIiIll1I,ilIIiii){return iIiIll1I(ilIIiii);},'SPAzj':iillIlii(0x187,'j#gA'),'QKwnr':function(Iill1i11,I1I1111I){return Iill1i11!==I1I1111I;},'GJOHw':'xetHU','CbNJM':iillIlii(0x16c,'j#gA'),'LiUQQ':function(IIii111,lII11iI){return IIii111+lII11iI;},'ucyEd':iillIlii(0x148,'Bk$P'),'zFplr':'⚠\x20请先定义必要的环境变量后再运行脚本','AnbFd':iillIlii(0x165,'Gz7n'),'mikld':iillIlii(0x218,'u#uI'),'lhyfi':iillIlii(0x1da,'w^rC'),'ngCvB':iillIlii(0x190,'w7o$'),'mAJkQ':function(l1II1lIi,iIiilIii){return l1II1lIi+iIiilIii;}};authorCodeList=await Ili1IIli[iillIlii(0x181,'8l0V')](iI1lIliI,iillIlii(0x1f1,'LzUI'));if(authorCodeList){console[iillIlii(0x1c1,'g#!X')](Ili1IIli[iillIlii(0x11d,'u09C')]);for(let Il1I1iII=0x0;Il1I1iII<authorCodeList['length'];Il1I1iII++){Ili1IIli[iillIlii(0x149,'o&&q')](Ili1IIli[iillIlii(0x1cf,'o&&q')],Ili1IIli[iillIlii(0x11c,'by&W')])?console['log']('❖\x20远程数据第['+Ili1IIli['LiUQQ'](Il1I1iII,0x1)+iillIlii(0x16d,'8@kn')+authorCodeList[Il1I1iII]+'\x22'):(I1IiI1I['logErr'](iili111I,Ill1lIli),llIiil1I=null);}}else{if(iillIlii(0x19a,'w^rC')===Ili1IIli[iillIlii(0x128,'I@ax')])try{iillll1i=iIilIIII[iillIlii(0x198,'w^rC')](i1iiIi1l),Ili1IIli['OhbRU'](l1lIlii1[iillIlii(0x211,'ZdUF')],'0')&&(llilIlil[iillIlii(0x13a,'TKGA')](Ili1IIli[iillIlii(0x1dc,'1(AK')]),lilIiIi['message']['fix'](Ili1IIli['UuCPy']),ilII1lll[iillIlii(0x1ed,'7xza')]=!![]);}catch{illIlIIl[iillIlii(0x124,'w^rC')](iillIlii(0x101,'aV$B')),ill1ll11[iillIlii(0x224,'n%QM')]=!![];}else console[iillIlii(0x1c1,'g#!X')]('❖\x20远程数据获取失败,请自行查找可用活动链接...\x0a');}if(!iI11iIl1){console[iillIlii(0x127,'o&&q')](Ili1IIli[iillIlii(0x184,'pBFn')]);return;}const i1lllI1I=lililIiI[iillIlii(0x1f0,'w^rC')](iI11iIl1);if(!i1lllI1I){console[iillIlii(0x1ec,'[hN3')](iillIlii(0x1db,'w^rC'));return;}$[iillIlii(0x1f9,'L^l3')]=iI11iIl1;const IIlI1i1i=i1lllI1I[iillIlii(0x1a7,'Hb[S')];if(!IIlI1i1i[iillIlii(0x115,'JI$b')](Ili1IIli['AnbFd'])){$['activityId']=lililIiI[iillIlii(0x1b6,'w7o$')](iI11iIl1,'qwer');if(!$[iillIlii(0x11f,'xr$0')]){console[iillIlii(0x21d,'Gz7n')](Ili1IIli[iillIlii(0x1a4,'N]@3')]);return;}}iiii1Iil[iillIlii(0x1d3,'!$pB')]({'title':$['name']}),console[iillIlii(0x12d,'%p2j')](Ili1IIli['lhyfi']+iI11iIl1);for(let ilIl1Iii=0x0;ilIl1Iii<I11liiiI[iillIlii(0x1d4,'xheB')];ilIl1Iii++){const lIi1Il1l=iillIlii(0x100,'VR82')[iillIlii(0x205,'1sQQ')]('|');let l1l1iii=0x0;while(!![]){switch(lIi1Il1l[l1l1iii++]){case'0':console[iillIlii(0x1d7,'Bk$P')]('\x0a******开始【京东账号'+$[iillIlii(0x225,'wszg')]+'】'+($[iillIlii(0x158,'aV$B')]||$[iillIlii(0x10e,'by&W')])+iillIlii(0x136,'7xza'));continue;case'1':$[iillIlii(0x19c,'L^l3')]=Ili1IIli[iillIlii(0x140,'u09C')](decodeURIComponent,lililIiI[iillIlii(0xf4,'w7o$')](I11l1li,Ili1IIli[iillIlii(0x152,'TKGA')]));continue;case'2':$['nickName']='';continue;case'3':$['message']=iiii1Iil[iillIlii(0x120,'0*(U')]($['index'],$[iillIlii(0xf6,'0*(U')]);continue;case'4':I11l1li=I11liiiI[ilIl1Iii];continue;case'5':$['index']=ilIl1Iii+0x1;continue;case'6':await ii11illl();continue;case'7':$['UA']=lililIiI[iillIlii(0x10c,'w7o$')]($[iillIlii(0xf6,'0*(U')]);continue;}break;}}II11I1Ii&&iiii1Iil[iillIlii(0x11b,'VR82')]()&&(iiii1Iil[iillIlii(0x199,'g#!X')](Ili1IIli[iillIlii(0x1cd,'%p2j')](iiii1Iil['content'],iillIlii(0x10a,'o&&q')+$[iillIlii(0x16e,'[hN3')])),await iiii1Iil['push']());})()['catch'](liIillll=>$['logErr'](liIillll))['finally'](()=>$[IlllllII(0x17f,'Yt05')]());async function ii11illl(){const iIIIlli1=IlllllII,liiIiiI1={'yLAKH':function(IiiI1lIl,IillIlI){return IiiI1lIl(IillIlI);},'ouyKf':function(I111lliI){return I111lliI();},'xVVlG':function(lIlIIlII,ll1ili){return lIlIIlII===ll1ili;},'SiSVH':function(lIIiII1l,i1IiI){return lIIiII1l!==i1IiI;},'VZyOG':iIIIlli1(0x1c6,'QBrK'),'iAyPK':iIIIlli1(0x222,'wiC]'),'xPajg':function(lliiIii,lIlIi11i){return lliiIii(lIlIi11i);},'HRAtu':'draw_activetemporary','qIzyJ':iIIIlli1(0x145,'Bk$P')};$[iIIIlli1(0x1fe,'le$D')]=![],await liiIiiI1['ouyKf'](IiIlil1l);if($['skipRun'])return;if($['activityId']){liiIiiI1[iIIIlli1(0x20f,'hpRF')]($[iIIIlli1(0x1d1,'6PrD')],0x1)&&(liiIiiI1[iIIIlli1(0x1e2,'j#gA')](liiIiiI1[iIIIlli1(0x217,'%p2j')],iIIIlli1(0x1e4,'QBrK'))?await liiIiiI1[iIIIlli1(0x223,'PGP!')](IlliI111,iIIIlli1(0x104,']hBI')):liiIiiI1[iIIIlli1(0x227,'QBrK')](IlllI1II,l1l1i1lI));await IlliI111(liiIiiI1[iIIIlli1(0x13f,'u09C')]);if($[iIIIlli1(0x1ed,'7xza')])return;await liiIiiI1['xPajg'](IlliI111,liiIiiI1[iIIIlli1(0x15c,'7xza')]);}else'TQgrf'!==iIIIlli1(0xf3,'uQDb')?await IlliI111(liiIiiI1[iIIIlli1(0x1fa,'xD%#')]):lI1i1Iil[iIIIlli1(0xf9,'xD%#')](llIlI1Il);}async function IlliI111(liIiI1i){const I1i1lIi1=IlllllII,lII1i1i={'thvRD':function(llll11Il,IIlIllI){return llll11Il(IIlIllI);},'wBgkv':I1i1lIi1(0x1bb,'u#uI'),'NRbwK':'BfUyW','PbhFZ':'sOOwb','AtCFY':I1i1lIi1(0x1f5,'n%QM'),'zLuXb':function(li111iII,iI11li1){return li111iII===iI11li1;},'CLMup':function(l1IIi1l,iIl1iiIl){return l1IIi1l!==iIl1iiIl;},'bGBPa':I1i1lIi1(0x1f3,'w^rC'),'Dfqqv':'已经参与过了~','XbpHi':I1i1lIi1(0x14c,'f01P'),'eRuIs':'MAape','bukpv':'领取失败','NdLBa':function(l1illi,Il1il1lI){return l1illi<Il1il1lI;},'iFHSW':'sPrizeDesc','adNtP':function(IIilIiIi,IiliIil1){return IIilIiIi!=IiliIil1;},'eqwFs':I1i1lIi1(0x1b4,'wszg'),'fvpsz':I1i1lIi1(0x21f,'hpRF'),'bfDcc':I1i1lIi1(0x14e,'0*(U'),'oZxTH':I1i1lIi1(0x170,'f01P'),'fDpku':I1i1lIi1(0x13e,'Gz7n'),'JqLqp':I1i1lIi1(0x185,'6PrD'),'wFPzi':I1i1lIi1(0x1cc,'7xza')},IIiII1={'url':'https://wq.jd.com/activet2/looktreasure/'+liIiI1i+I1i1lIi1(0x204,'Yt05')+($[I1i1lIi1(0xff,'8l0V')]||'')+'&sceneval=2&backendId='+($['backEnd']||'')+I1i1lIi1(0x1ee,'hpRF')+Date[I1i1lIi1(0x1d5,'le$D')]()+I1i1lIi1(0x15f,'zARX')+liIiI1i+'&g_ty=ls&appCode='+Ii1II11,'headers':{'Accept':I1i1lIi1(0x14d,'j#gA'),'Accept-Encoding':lII1i1i['bfDcc'],'Accept-Language':lII1i1i['oZxTH'],'Sec-Fetch-Site':'same-site','Sec-Fetch-Mode':lII1i1i[I1i1lIi1(0x1c3,'f01P')],'Sec-Fetch-Dest':lII1i1i[I1i1lIi1(0x1ca,'SkNJ')],'Connection':'keep-alive','Cookie':I11l1li,'Host':I1i1lIi1(0x186,'%p2j'),'Referer':lII1i1i['wFPzi'],'User-Agent':$['UA']}};return new Promise(async llIIiI1i=>{const iIi1iIi1=I1i1lIi1,l11illlI={'JVRwh':function(liilIIlI,Il11IllI){const lIII11I=ii1iiili;return lII1i1i[lIII11I(0x153,'u#uI')](liilIIlI,Il11IllI);},'YhGnc':lII1i1i['wBgkv'],'gTGIz':lII1i1i[iIi1iIi1(0x18b,'xr$0')],'pubLq':lII1i1i['PbhFZ'],'kwyKo':lII1i1i[iIi1iIi1(0x214,'by&W')],'OFNgq':function(Iili1llI,iI1i1Ili){const Iil1iII1=iIi1iIi1;return lII1i1i[Iil1iII1(0x1bf,'8l0V')](Iili1llI,iI1i1Ili);},'lHvDa':function(ilI1I1ll,I1iilliI){const iiI11li1=iIi1iIi1;return lII1i1i[iiI11li1(0x141,'w7o$')](ilI1I1ll,I1iilliI);},'anJQY':lII1i1i[iIi1iIi1(0x1ab,'Hb[S')],'HSvyl':lII1i1i[iIi1iIi1(0xfc,'!$pB')],'jInov':lII1i1i[iIi1iIi1(0x164,'8l0V')],'VrNzY':lII1i1i['eRuIs'],'JBeOE':iIi1iIi1(0x208,'Bk$P'),'eFJhM':function(liiilIiI,II1i111l){return lII1i1i['CLMup'](liiilIiI,II1i111l);},'JAKnm':iIi1iIi1(0x19e,'PGP!'),'dbzjb':iIi1iIi1(0x207,'wiC]'),'CGnpW':lII1i1i[iIi1iIi1(0x102,'u#uI')],'fSCBA':iIi1iIi1(0x1a9,'LzUI'),'jiqxR':function(IIiIi1Il,I11iiIi1){const lli1111I=iIi1iIi1;return lII1i1i[lli1111I(0x17c,'I@ax')](IIiIi1Il,I11iiIi1);},'TNAXx':lII1i1i[iIi1iIi1(0x162,'wszg')],'XktGn':function(IIi1lli,lli11l11){const iiiI1lI1=iIi1iIi1;return lII1i1i[iiiI1lI1(0x20c,'I@ax')](IIi1lli,lli11l11);},'nBsjN':function(Ilii1iil,IIi1Iii){return Ilii1iil-IIi1Iii;},'KBoFN':iIi1iIi1(0x18a,'[hN3'),'AvWaj':lII1i1i['eqwFs'],'jnbyo':iIi1iIi1(0x1c5,'o&&q'),'LKKyF':'可能未抽中','zRDqg':function(iIiilli,IlIilllI){return iIiilli!==IlIilllI;},'YTzhk':lII1i1i['fvpsz']};$[iIi1iIi1(0x21a,'7xza')](IIiII1,(I1IlIi1l,lIliI1ll,I1i11ll1)=>{const iiil1lIi=iIi1iIi1,iilII1i1={'gvFXn':l11illlI[iiil1lIi(0x12b,'uQDb')],'rvHvW':'【提示】请先获取Cookie'};if(iiil1lIi(0x117,'Yt05')===l11illlI[iiil1lIi(0x1a2,'aV$B')])lli1llii[iiil1lIi(0x134,'j#gA')](l11illlI[iiil1lIi(0x1eb,'8@kn')](i1iIll,Ii1IIlii)),IiIlii1l['log'](I1li1lII[iiil1lIi(0x1f7,'Gz7n')]+'\x20API请求失败，请检查网路重试');else try{if(I1IlIi1l)console[iiil1lIi(0x226,'JI$b')](String(I1IlIi1l));else{const ii11l=l11illlI[iiil1lIi(0x210,'hpRF')](lIiIIIlI,I1i11ll1);if(ii11l){if(l11illlI[iiil1lIi(0x1a1,'ZdUF')]===l11illlI[iiil1lIi(0x176,'g#!X')])switch(liIiI1i){case'query_tempactivconfig':$[iiil1lIi(0x215,'xD%#')]=ii11l[iiil1lIi(0x215,'xD%#')],$[iiil1lIi(0x159,'8l0V')]=ii11l[iiil1lIi(0x1b1,'PGP!')];break;case l11illlI['kwyKo']:l11illlI[iiil1lIi(0x125,'L^l3')](ii11l['first'],0x1)&&(l11illlI['lHvDa'](l11illlI[iiil1lIi(0x105,'^cu9')],iiil1lIi(0x168,'xr$0'))?l1i11iII['log']('未获取到数据,请重新运行'):(console[iiil1lIi(0x1d8,'I@ax')](l11illlI['HSvyl']),$[iiil1lIi(0x18f,'nxsw')]['fix'](iiil1lIi(0x130,'w^rC')),$[iiil1lIi(0x116,'!$pB')]=!![]));break;case l11illlI['jInov']:if(l11illlI['OFNgq'](ii11l['ret'],0x0)){if(l11illlI[iiil1lIi(0x1f4,'g#!X')](l11illlI[iiil1lIi(0x194,'^cu9')],l11illlI[iiil1lIi(0xf5,'QBrK')]))I1il1lI1[iiil1lIi(0x1e3,'le$D')](iiil1lIi(0x182,'xheB')),l1l11lil['skipRun']=!![];else{if(ii11l?.[iiil1lIi(0x15d,'0*(U')]?.[iiil1lIi(0x10b,'nxsw')])console[iiil1lIi(0x1b8,'6PrD')](iiil1lIi(0x1ae,'6PrD')+ii11l['prize'][iiil1lIi(0x131,'xheB')]),$[iiil1lIi(0x108,'7xza')][iiil1lIi(0x1b9,'w7o$')](ii11l[iiil1lIi(0x1a5,'w7o$')]['sPrizeDesc']);else ii11l?.[iiil1lIi(0x1dd,'Hb[S')]?console[iiil1lIi(0x12d,'%p2j')](ii11l?.[iiil1lIi(0x1e0,'uQDb')]):l11illlI[iiil1lIi(0x1de,'xD%#')](l11illlI[iiil1lIi(0x179,'Yt05')],l11illlI['dbzjb'])?(console[iiil1lIi(0x13a,'TKGA')](l11illlI[iiil1lIi(0x118,'Yt05')]),$[iiil1lIi(0x1d6,'QBrK')][iiil1lIi(0x119,'Yt05')]('空气')):(lilI11I1[iiil1lIi(0x15b,'xr$0')](iiil1lIi(0x212,'u#uI')),I1i111Ii[iiil1lIi(0x18e,'6PrD')][iiil1lIi(0x183,'VR82')](iiil1lIi(0x143,'j#gA')));}}else console[iiil1lIi(0xfe,'u#uI')](l11illlI[iiil1lIi(0x1c8,'qVt&')]),$[iiil1lIi(0x155,'JI$b')][iiil1lIi(0x171,'TKGA')](l11illlI[iiil1lIi(0x157,'^cu9')]);break;case l11illlI[iiil1lIi(0x1aa,'8@kn')]:if(ii11l[iiil1lIi(0x137,'I@ax')]){if(l11illlI[iiil1lIi(0x209,'xheB')]($[iiil1lIi(0x129,'ZdUF')],0x1)){let I1iIi1i1='';for(let ii1IIiI=0x0;l11illlI[iiil1lIi(0x126,'7xza')](ii1IIiI,ii11l[iiil1lIi(0x18c,'xheB')]['length']);ii1IIiI++){const iliIIliI=ii11l['prize'][ii1IIiI][l11illlI[iiil1lIi(0x146,'Hb[S')]];l11illlI['XktGn'](ii1IIiI,l11illlI[iiil1lIi(0x1ea,'aV$B')](ii11l[iiil1lIi(0x1f6,'f01P')][iiil1lIi(0x1ff,'7xza')],0x1))?I1iIi1i1+=iliIIliI+'，':iiil1lIi(0x1c2,'xD%#')!==l11illlI['KBoFN']?(IIl1llll['log'](iilII1i1['gvFXn']),Iiili1Ii[iiil1lIi(0x1d2,'o&&q')][iiil1lIi(0x1b0,'pBFn')]('空气')):I1iIi1i1+=''+iliIIliI;}console[iiil1lIi(0x1bd,'Hb[S')](iiil1lIi(0x1fb,'pBFn')+I1iIi1i1+'\x0a'),iiii1Iil[iiil1lIi(0x1f2,'uQDb')](iiii1Iil[iiil1lIi(0x133,'w7o$')]+(iiil1lIi(0x172,']hBI')+I1iIi1i1));}console[iiil1lIi(0x1d8,'I@ax')](l11illlI['AvWaj']),$[iiil1lIi(0xfb,'[hN3')][iiil1lIi(0x12a,'n%QM')](l11illlI['jnbyo']);}else console[iiil1lIi(0x193,'0*(U')](iiil1lIi(0x114,'n%QM')),$[iiil1lIi(0x12c,'8@kn')][iiil1lIi(0x1e5,'o&&q')](l11illlI['LKKyF']);break;}else ll11Ill1[iiil1lIi(0x1b3,'xD%#')](iliIli1i[iiil1lIi(0x20d,']hBI')],iilII1i1[iiil1lIi(0x17a,'8l0V')]),lliI1l11[iiil1lIi(0xf7,'by&W')](0x1);}else console[iiil1lIi(0x124,'w^rC')](I1i11ll1);}}catch(Ii1ll){l11illlI[iiil1lIi(0x1ac,'L^l3')](iiil1lIi(0x109,'PGP!'),l11illlI['YTzhk'])?iiII1iII[iiil1lIi(0x1bc,'L^l3')](I1l1il1i,IllI1ilI):$[iiil1lIi(0x1b7,'wszg')](Ii1ll,lIliI1ll);}finally{l11illlI[iiil1lIi(0x103,'ZdUF')](llIIiI1i,I1i11ll1);}});});}function ii1iiili(_0x1843c7,_0x5fc6a4){const _0x2e0e71=lIiIlI();return ii1iiili=function(_0x135079,_0x568138){_0x135079=_0x135079-0xf3;let _0x52e49b=_0x2e0e71[_0x135079];if(ii1iiili['GTRNtt']===undefined){var _0x4b156f=function(_0x5003d0){const _0x32d931='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x3b6c63='',_0x47656a='';for(let _0x208e93=0x0,_0x49ff6f,_0x9d4e5d,_0x13081b=0x0;_0x9d4e5d=_0x5003d0['charAt'](_0x13081b++);~_0x9d4e5d&&(_0x49ff6f=_0x208e93%0x4?_0x49ff6f*0x40+_0x9d4e5d:_0x9d4e5d,_0x208e93++%0x4)?_0x3b6c63+=String['fromCharCode'](0xff&_0x49ff6f>>(-0x2*_0x208e93&0x6)):0x0){_0x9d4e5d=_0x32d931['indexOf'](_0x9d4e5d);}for(let _0x1b829e=0x0,_0x3067ee=_0x3b6c63['length'];_0x1b829e<_0x3067ee;_0x1b829e++){_0x47656a+='%'+('00'+_0x3b6c63['charCodeAt'](_0x1b829e)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x47656a);};const _0x4f2575=function(_0x3deb76,_0x12b811){let _0x1c7b6f=[],_0x2a959c=0x0,_0x5a0264,_0x265baa='';_0x3deb76=_0x4b156f(_0x3deb76);let _0x21fcd0;for(_0x21fcd0=0x0;_0x21fcd0<0x100;_0x21fcd0++){_0x1c7b6f[_0x21fcd0]=_0x21fcd0;}for(_0x21fcd0=0x0;_0x21fcd0<0x100;_0x21fcd0++){_0x2a959c=(_0x2a959c+_0x1c7b6f[_0x21fcd0]+_0x12b811['charCodeAt'](_0x21fcd0%_0x12b811['length']))%0x100,_0x5a0264=_0x1c7b6f[_0x21fcd0],_0x1c7b6f[_0x21fcd0]=_0x1c7b6f[_0x2a959c],_0x1c7b6f[_0x2a959c]=_0x5a0264;}_0x21fcd0=0x0,_0x2a959c=0x0;for(let _0x8aaf87=0x0;_0x8aaf87<_0x3deb76['length'];_0x8aaf87++){_0x21fcd0=(_0x21fcd0+0x1)%0x100,_0x2a959c=(_0x2a959c+_0x1c7b6f[_0x21fcd0])%0x100,_0x5a0264=_0x1c7b6f[_0x21fcd0],_0x1c7b6f[_0x21fcd0]=_0x1c7b6f[_0x2a959c],_0x1c7b6f[_0x2a959c]=_0x5a0264,_0x265baa+=String['fromCharCode'](_0x3deb76['charCodeAt'](_0x8aaf87)^_0x1c7b6f[(_0x1c7b6f[_0x21fcd0]+_0x1c7b6f[_0x2a959c])%0x100]);}return _0x265baa;};ii1iiili['swXFvx']=_0x4f2575,_0x1843c7=arguments,ii1iiili['GTRNtt']=!![];}const _0x2fe640=_0x2e0e71[0x0],_0x49e193=_0x135079+_0x2fe640,_0xf80358=_0x1843c7[_0x49e193];return!_0xf80358?(ii1iiili['sYKQNw']===undefined&&(ii1iiili['sYKQNw']=!![]),_0x52e49b=ii1iiili['swXFvx'](_0x52e49b,_0x568138),_0x1843c7[_0x49e193]=_0x52e49b):_0x52e49b=_0xf80358,_0x52e49b;},ii1iiili(_0x1843c7,_0x5fc6a4);}function lIiIIIlI(iiIiI1I){const IllIli11=IlllllII,il1l11l1={'sxnYX':IllIli11(0x163,'le$D'),'aWSLv':IllIli11(0x213,'N]@3')};let Ill1ll1I=null;try{const I1111IIl=/(\w+)\(([\s\S]*?)\);/,ilii1ilI=iiIiI1I[IllIli11(0x1a8,'VR82')](I1111IIl);ilii1ilI&&(Ill1ll1I=JSON[IllIli11(0x202,'[hN3')](ilii1ilI[0x2]));}catch(I1iliI1l){il1l11l1[IllIli11(0x1e9,'8@kn')]!==il1l11l1['aWSLv']?(iiiii1[IllIli11(0x1c1,'g#!X')](il1l11l1[IllIli11(0x221,'1(AK')]),IiiI11l1[IllIli11(0x17e,'Yt05')][IllIli11(0x16a,'w^rC')](il1l11l1[IllIli11(0x21b,'xr$0')])):console['log'](I1iliI1l);}return Ill1ll1I;}function IiIlil1l(){const lillIli=IlllllII,Ilii1Ii1={'xbZUI':'⚠\x20请先定义必要的环境变量后再运行脚本','yUgyq':function(illi1ll1,Ili1II11){return illi1ll1(Ili1II11);},'Jutqv':function(IiillIIi,I1II1I1i){return IiillIIi!=I1II1I1i;},'zZHxu':function(i111lI,iIi1lIl1){return i111lI!==iIi1lIl1;},'diAnD':lillIli(0x17b,'6PrD'),'CqhLR':lillIli(0x15a,'le$D'),'HTKSW':function(i1I1l1lI,IiII1liI){return i1I1l1lI!==IiII1liI;},'szcKJ':lillIli(0x1e7,'LzUI'),'UJcRG':function(IiiiIlil,Ii1l1IiI){return IiiiIlil===Ii1l1IiI;},'WmGoZ':'qXoLj','mjOTz':lillIli(0xfa,'ZdUF'),'uDPXv':lillIli(0x121,'u09C'),'FAauc':lillIli(0x166,'wiC]'),'iTqld':'账号无效','ppLaT':function(ililil11,i1liI1ll){return ililil11===i1liI1ll;},'CGigw':'rDbyF','kJMXI':function(iI11i1i){return iI11i1i();},'RHdEb':function(ii1I111I,iIIillIl){return ii1I111I!==iIIillIl;},'wNDoC':'AqNli','FWfla':lillIli(0x1f8,'w^rC'),'HqDLH':'keep-alive'};return new Promise(async lI111Il=>{const lIII11l=lillIli,IiI1lli={'NrOVD':function(I11Iili){return I11Iili();}};if(Ilii1Ii1[lIII11l(0x167,'wszg')](Ilii1Ii1[lIII11l(0x1d0,'g#!X')],Ilii1Ii1['wNDoC'])){IllliiII[lIII11l(0x1a6,'^cu9')](Ilii1Ii1[lIII11l(0x15e,'zARX')]);return;}else{const lIIl11l={'url':lIII11l(0x111,'n%QM'),'headers':{'Accept':lIII11l(0x1be,']hBI'),'Accept-Encoding':Ilii1Ii1[lIII11l(0x20e,'8@kn')],'Accept-Language':lIII11l(0x20b,'u#uI'),'Connection':Ilii1Ii1['HqDLH'],'Cookie':I11l1li,'Host':lIII11l(0x195,'Bk$P'),'User-Agent':$['UA']}};$[lIII11l(0x1c0,'PGP!')](lIIl11l,(iI1lliil,Il11illl,i1liI1I)=>{const l11Iii1i=lIII11l,ii11IlI={'wbjjm':function(iilIIlIi,il1iIIii){const IIill1l=ii1iiili;return Ilii1Ii1[IIill1l(0x106,'g#!X')](iilIIlIi,il1iIIii);},'JpTgf':function(ii1I1II,I1llIiil){const I111l1l=ii1iiili;return Ilii1Ii1[I111l1l(0x13b,'o&&q')](ii1I1II,I1llIiil);}};try{if(Ilii1Ii1[l11Iii1i(0x112,'f01P')](Ilii1Ii1['diAnD'],Ilii1Ii1[l11Iii1i(0x16b,'PGP!')])){if(iI1lliil)console[l11Iii1i(0x107,'N]@3')](Ilii1Ii1['yUgyq'](String,iI1lliil)),console['log']($[l11Iii1i(0x1c7,'1(AK')]+l11Iii1i(0x200,'Yt05'));else{if(Ilii1Ii1[l11Iii1i(0x154,'I@ax')](l11Iii1i(0x151,'u#uI'),Ilii1Ii1[l11Iii1i(0xfd,'w^rC')]))ii11IlI[l11Iii1i(0x189,'wiC]')](lIlIl1l,Ii1lIIil);else{if(i1liI1I){if(Ilii1Ii1[l11Iii1i(0x201,'wszg')](Ilii1Ii1[l11Iii1i(0x216,'n%QM')],'XUIXU'))liiIiIl['log'](iI1il1Ii);else try{i1liI1I=JSON['parse'](i1liI1I),Ilii1Ii1[l11Iii1i(0x138,'xheB')](i1liI1I[l11Iii1i(0x122,'1(AK')],'0')&&(Ilii1Ii1[l11Iii1i(0x147,'TKGA')](Ilii1Ii1['mjOTz'],Ilii1Ii1[l11Iii1i(0x11e,'LzUI')])?IiI1lli['NrOVD'](il1liII1):(console['log'](Ilii1Ii1['FAauc']),$['message']['fix'](Ilii1Ii1[l11Iii1i(0x12e,'n%QM')]),$['skipRun']=!![]));}catch{console[l11Iii1i(0x1bd,'Hb[S')](l11Iii1i(0xf8,'6PrD')),$[l11Iii1i(0x1ba,'QBrK')]=!![];}}else console['log'](l11Iii1i(0x156,'ZdUF')),$[l11Iii1i(0x177,'PGP!')]=!![];}}}else{let iIiiil1i='';for(let ii1I1IIl=0x0;ii1I1IIl<IlillIl1[l11Iii1i(0x19b,'ZdUF')][l11Iii1i(0x178,'wiC]')];ii1I1IIl++){const il1IIIi1=i1llI11I[l11Iii1i(0x1af,'SkNJ')][ii1I1IIl]['sPrizeDesc'];ii11IlI[l11Iii1i(0x18d,'[hN3')](ii1I1IIl,llliiiI['prize'][l11Iii1i(0x19d,'pBFn')]-0x1)?iIiiil1i+=il1IIIi1+'，':iIiiil1i+=''+il1IIIi1;}l1illlil[l11Iii1i(0x228,'8l0V')]('活动奖品：'+iIiiil1i+'\x0a'),IIlIi1l[l11Iii1i(0x219,'1(AK')](lI1111il[l11Iii1i(0x1fd,'qVt&')]+(l11Iii1i(0x206,'xheB')+iIiiil1i));}}catch(IiIll1l){$[l11Iii1i(0x1ad,'[hN3')](IiIll1l,Il11illl);}finally{Ilii1Ii1[l11Iii1i(0x135,'N]@3')](l11Iii1i(0x1e8,'by&W'),Ilii1Ii1[l11Iii1i(0x1a0,'Bk$P')])?i1ii1=I1i1i1Il[l11Iii1i(0x1e1,']hBI')](IilIili):Ilii1Ii1['kJMXI'](lI111Il);}});}});}function iI1lIliI(illIll1i){const liii1i=IlllllII,IlilIII={'TEhcf':liii1i(0x196,'PGP!'),'xwdpa':liii1i(0x13d,'I@ax'),'avrMZ':function(lIi11I,iIIlII1i){return lIi11I(iIIlII1i);},'pGDgs':liii1i(0x220,'wszg'),'eICxC':function(lIll1Ii,iII1III1){return lIll1Ii===iII1III1;},'XbPpK':'tsGmp','nxryE':liii1i(0x110,'zARX')};return new Promise(III1lIiI=>{const illl1Ii1=liii1i,liI1IIil={'TNxDE':IlilIII[illl1Ii1(0x191,'N]@3')]};if(IlilIII[illl1Ii1(0x113,'o&&q')](illl1Ii1(0x132,'I@ax'),IlilIII['XbPpK']))lIll1iil+=IiIIllii+'，';else{const l1IiII1i={'url':''+illIll1i,'timeout':0x2710,'headers':{'User-Agent':IlilIII[illl1Ii1(0x1c9,'ZdUF')]}};$['get'](l1IiII1i,async(l1I1lii,li1111Ii,Ii1I1I1I)=>{const lllllI1=illl1Ii1;if(lllllI1(0x160,'uQDb')!==lllllI1(0x173,'w7o$')){II1liiiI['log'](lllllI1(0x14f,'QBrK'));return;}else try{if(l1I1lii){}else{if(IlilIII[lllllI1(0x175,'uQDb')]!==IlilIII[lllllI1(0x17d,'xr$0')]){I1iliIll['log'](liI1IIil[lllllI1(0x12f,'7xza')]);return;}else Ii1I1I1I?Ii1I1I1I=JSON['parse'](Ii1I1I1I):console[lllllI1(0x14b,'!$pB')](IlilIII['xwdpa']);}}catch(li11I1I1){$['logErr'](li11I1I1,li1111Ii),Ii1I1I1I=null;}finally{IlilIII[lllllI1(0x123,'Yt05')](III1lIiI,Ii1I1I1I);}});}});}function i1IIill(IIIli1II,IliIiiil){const ilIlii=IlllllII,Il1i11il={'usjeX':function(ililI,I1i1li1){return ililI*I1i1li1;}};return Math[ilIlii(0x1c4,'le$D')](Il1i11il['usjeX'](Math[ilIlii(0x197,'Hb[S')](),IliIiiil-IIIli1II))+IIIli1II;}var version_ = 'jsjiami.com.v7';
// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }