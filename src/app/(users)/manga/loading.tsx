import { Skeleton } from "@nextui-org/skeleton";

export default function Loading() {
    return (
        <div className="h-screen w-full flex ">
            <Skeleton className="w-[10rem] h-[12rem]"></Skeleton>
        </div>
    );
}
