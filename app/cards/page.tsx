"use client";

import Card1 from "@/pulseui-components/Cards/Card1";
import ComponentNavbar from "@/components/ComponentNavbar";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import CopyButton from "@/pulseui-components/CopyButton/CopyButton";
import CodeBlock from "@/components/CodeBlock";
import Card2 from "@/pulseui-components/Cards/Card2";

const card1Props = [
    { prop: "Image", type: "string", required: "false", description: "URL of the image displayed at the top of the card." },
    { prop: "Name", type: "string", required: "false", description: "Name displayed over the image." },
    { prop: "Designation", type: "string", required: "false", description: "Subtitle shown below the name on the image." },
    { prop: "Tag", type: "string", required: "false", description: "Category tag shown in the text section." },
    { prop: "Title", type: "string", required: "false", description: "Main heading in the text section." },
    { prop: "Description", type: "string", required: "false", description: "Body text shown below the title." },
    { prop: "onLike", type: "() => void", required: "false", description: "Callback fired when the heart button is clicked." },
    { prop: "onMessage", type: "() => void", required: "false", description: "Callback fired when the message button is clicked." },
    { prop: "onExternalLink", type: "() => void", required: "false", description: "Callback fired when the external link button is clicked." },
    { prop: "className", type: "string", required: "false", description: "Additional CSS classes to style the card." },
]

export default function CardDocs() {
    return (
        <div className="bg-black text-white min-h-screen flex">
            <ComponentNavbar />

            <div className="flex-1 px-8 py-12 max-w-7xl">
                <div className="flex flex-col gap-10">

                    {/* Page Header */}
                    <div className="flex flex-col gap-2">
                        <h1 className="text-4xl font-semibold">Cards</h1>
                        <p className="text-neutral-400">Below is a collection of beautifull cards for showcasing content</p>
                    </div>

                    {/* Card 1 Docs */}
                    <div className="flex flex-col gap-6 bg-neutral-900 p-6 rounded-xl">
                        <p className="font-semibold text-2xl">Basic Card 1</p>

                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start lg:items-stretch">

                            {/* Preview */}
                            <div className="flex w-full items-center justify-center min-h-[420px] h-full bg-neutral-950 border border-neutral-800 rounded-xl p-6">
                                <Card1
                                    Image="https://res.cloudinary.com/dpju1wia5/image/upload/v1773058342/467120601_9484919178189518_6991019461191973247_n_bw0gmk.jpg"
                                    Name="Hitesh Chowdhury"
                                    Designation="Guru Ji"
                                    Tag="DESIGN"
                                    Title="Chai Aur Code"
                                    Description="Hanji to kaisi lagi Pulse UI?"
                                    onLike={() => console.log("liked")}
                                    onMessage={() => console.log("message")}
                                    onExternalLink={() => window.open("https://chaicode.com")}
                                />
                            </div>

                            {/* Right: Installation + Props + Usage */}
                            <div className="flex flex-col gap-6">

                                {/* Installation */}
                                <div className="flex flex-col gap-2">
                                    <p className="font-semibold text-lg">Installation</p>
                                    <div className="bg-neutral-950 rounded-lg flex border border-neutral-700 items-center justify-between px-3 py-2">
                                        <p className="text-neutral-400 text-sm truncate px-2">
                                            npx shadcn@latest add https://pulseui-henna.vercel.app/registry/Card1.json
                                        </p>
                                        <CopyButton text="npx shadcn@latest add https://pulseui-henna.vercel.app/registry/Card1.json" />
                                    </div>
                                </div>

                                {/* Props */}
                                <div className="flex flex-col gap-2">
                                    <p className="font-semibold text-lg">Props</p>
                                    <div className="overflow-x-auto rounded-lg border border-neutral-700">
                                        <Table>
                                            <TableHeader>
                                                <TableRow className="hover:bg-neutral-900 border-neutral-700">
                                                    <TableHead className="text-white text-left w-[120px]">Prop</TableHead>
                                                    <TableHead className="text-white text-left">Type</TableHead>
                                                    <TableHead className="text-white text-center w-[100px]">Required</TableHead>
                                                    <TableHead className="text-white text-left">Description</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {card1Props.map((row) => (
                                                    <TableRow key={row.prop} className="hover:bg-neutral-900 border-neutral-800">
                                                        <TableCell>
                                                            <div className="bg-neutral-800/50 border border-neutral-700/50 rounded inline-flex px-2 py-1">
                                                                <code className="text-neutral-200 text-xs">{row.prop}</code>
                                                            </div>
                                                        </TableCell>
                                                        <TableCell>
                                                            <div className="bg-neutral-800/50 border border-neutral-700/50 rounded inline-flex px-2 py-1">
                                                                <code className="text-neutral-400 text-xs">{row.type}</code>
                                                            </div>
                                                        </TableCell>
                                                        <TableCell>
                                                            <div className="flex justify-center">
                                                                <span className={`text-xs ${row.required === "true" ? "text-red-400" : "text-neutral-500"}`}>
                                                                    {row.required}
                                                                </span>
                                                            </div>
                                                        </TableCell>
                                                        <TableCell>
                                                            <p className="text-neutral-300 text-sm">{row.description}</p>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </div>
                                </div>

                                {/* Usage */}
                                <div className="flex flex-col gap-2">
                                    <p className="font-semibold text-lg">Usage</p>
                                    <CodeBlock code={`<Card1
    Image="https://example.com/photo.jpg"
    Name="Hitesh Chowdhury"
    Designation="Guru Ji"
    Tag="DESIGN"
    Title="Chai Aur Code"
    Description="Hanji to kaisi lagi Pulse UI?"
    onLike={() => console.log("liked")}
    onMessage={() => console.log("message")}
    onExternalLink={() => window.open("https://chaicode.com")}
/>`} lang="tsx" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card2 docs */}
                    {/* <div>
                        <div className="w-full h-auto">
                            <p className="text-5xl">Card 2</p>
                        </div>
                        <div>
                            <Card2 />
                        </div>
                    </div> */}
                    {/* card3 docs */}
                    {/* <div>
                        <div className="w-full h-auto">
                            <p className="text-5xl">Card 3</p>
                        </div>
                        <div>
                            <Card1 />
                        </div>
                    </div> */}
                    {/* card4 docs */}
                   /
                    {/* card5 docs */}
                    /
                    {/* card6 docs */}
                    {/* <div>
                        <div className="w-full h-auto">
                            <p className="text-5xl">Card 6</p>
                        </div>
                        <div>
                            <Card5 />
                        </div>
                    </div> */}
                    {/* card7 docs */}
                    {/* <div>
                        <div className="w-full h-auto">
                            <p className="text-5xl">Card 7</p>
                        </div>
                        <div>
                            <Card7 />
                        </div>
                    </div>
                    {/* card8 docs */}
                    {/* <div>
                        <div className="w-full h-auto">
                            <p className="text-5xl">Card 8</p>
                        </div>
                        <div>
                            <Card8 />
                        </div>
                    </div>   */} 

                </div>
            </div>
        </div>
    );
}