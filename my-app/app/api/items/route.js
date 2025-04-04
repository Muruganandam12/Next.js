export async function GET(req) {
    req.nextUrl.searchParams.get('type')
    console.log('Type:',type)
    return Response.json([
        {title:'IPhone'},
        {title:'Galaxy'}
    ])
}

export async function POST() {
    return Response.json({message:'POST Success' }
    )
}