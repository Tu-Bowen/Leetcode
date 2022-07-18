/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
    let m=new Map()
    for(let i=0;i<s1.length;i++){
        m.set(s1[i],m.has(s1[i])?m.get(s1[i])+1:1)
    }
    for(let i=0;i<s2.length;i++){
        if(!m.has(s2[i]))continue
        let _m=new Map(m)
        for(let j=i;_m.has(s2[j]);j++){
            _m.set(s2[j],_m.get(s2[j])-1)
            if(_m.get(s2[j])===0)
            _m.delete(s2[j])
        }
        if(_m.size===0)return true
    }
    return false
};