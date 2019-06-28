export const getFormId = () => {
    const formIds = {
        fsjs: {
            f: "9a39042c-9118-4bc0-8836-8c56633c2ac3",
            g: "5597893a-6113-44bc-97f0-d80b8a5376f4",
            i: "4f87d4e8-05c7-4448-957e-61322139ab91",
            n: "d4e942c9-9af9-4b00-8fba-1fff390e9bbc",
            x: "582c6f7a-2240-42d9-89da-c5b85e2d42ec"
        },
        xd: {
            f: "6250dcd8-3204-4997-b021-284c06433740",
            g: "35b24a39-0c5f-457a-bc07-5ec3aff368a6",
            i: "f9d39a9a-5846-4561-b38d-499b2806ef0d",
            n: "fae105fa-ffde-4d5a-ab22-c4bcd7dbbae8",
            x: "6ae9d789-6d45-40f1-879a-b771bccf92be"
        }
    }
    // const course = process.env.COURSE
    // const source = process.env.SOURCE
    const course ="fsjs"
    const source = "n"
    
    return formIds[course][source]
}

export const getMeetingLink = () => {
    // const course = process.env.COURSE
    // const source = process.env.SOURCE
    const course ="fsjs"
    const source = "n"

    return `https://app.hubspot.com/meetings/vschool/${course}-${source}?embed=true`
}

// export const importAll = r => {
//     let images = {}
//     r.keys().map((item, index) => {
//         images[item.replace("./", "")] = r(item)
//     })
//     return images
// }

// export const lazyLoadImage = async url => {
//     try {
//         return await import(/* webpackMode: "lazy-once" */
//         url)
//     } catch (e) {
//         console.error(e)
//     }
// }
