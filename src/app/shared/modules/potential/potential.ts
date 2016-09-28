export interface Potential {
    "_id": number,
    "lead": PotentialLead,
    "author": string,
    "timestamp": number,
    "contentBody": string,
    "contentImageUrl": string,
    "stats": PotentialStats,
    "region": string,
    "tags": string[]
}

interface PotentialLead {
    "name": string,
    "profileUrl": string,
    "pictureUrl": string,
    "followers": number
}

interface PotentialStats {
    "likes": number,
    "shares": number
}