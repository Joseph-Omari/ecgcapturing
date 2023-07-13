import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Fields from "../../../../models/fieldrecord";
// import { connect } from "mongoose";


export async function POST(request){
    const {groupNumber,cusName,cusContact,tarrifClass,activity,meterNumber,readings,anomaly,flatRate,digitalAddress,idType,idNumber,remarks} = await request.json();
    await connectMongoDB();
    await Fields.create({groupNumber,cusName,cusContact,tarrifClass,activity,meterNumber,readings,anomaly,flatRate,digitalAddress,idType,idNumber,remarks});
    return NextResponse.json({message: "Fields Created"},{status: 201});
}

export async function GET(request){
    await connectMongoDB();
    const field = await Fields.find();
    return NextResponse.json({field});
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Fields.findByIdAndDelete(id);
    return NextResponse.json({message: "record deleted "}, {status:200});
}


