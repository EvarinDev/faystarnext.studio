import DiscordIcon from "@/components/DiscordIcon";
import EarthIcon from "@/components/EarthIcon";
import GithubIcon from "@/components/GithubIcon";
import { Image } from "@nextui-org/react";

export default function Projects() {
    const projects = [
        {
            title: "Analytic Night",
            project: "Analytic Project",
            type: "Contact / Creator",
            discord: "https://discord.gg/DeVffTmKqx",
            website: "https://analytic.rlss.in.th/",
            icon: "https://bucket.rlss.in.th/assets/Dark.png",
        },
        {
            title: "Raisin",
            project: "Raisin Project",
            type: "Hosting",
            discord: "https://discord.gg/KTPaySDD5a",
            website: "https://maintenance.raisinhub.cloud/",
            icon: "https://bucket.rlss.in.th/assets/img/raisin.png",
        },
        {
            title: "SnowLight.JS",
            project: "FAYStarNext Project",
            type: "Framework",
            discord: "",
            github: true,
            github_repo: "https://github.com/snowlightjs/SnowLight.js",
            website: "https://docs.faystarnext.studio/snowlight/home",
            icon: "https://avatars.githubusercontent.com/u/168909125?v=4",
        }
    ];
    return (
        <div>
            <div className="items-center justify-center h-screen text-center bg-white dark:text-white">
                <h1 className="justify-center text-4xl font-bold dark:text-neutral-800">Project</h1>
                <div className="flex flex-wrap justify-center">
                    {projects.map((item) => (
                        <div
                            className="border bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 flex flex-col items-center m-2"
                            key={item.title}
                        >
                            <Image src={item.icon} alt="Avatar" className="w-32 h-32 rounded-full" />
                            <div className="mt-4 text-center">
                                <h2 className="text-xl font-bold text-gray-700">{item.title}</h2>
                                <p className="text-gray-600">{item.type}</p>
                                <p className="text-gray-600">{item.project}</p>
                                <div className="flex flex-wrap justify-center items-center">
                                    {item.discord !== "" ? (
                                        <a href={item.discord} className="flex justify-center items-center">
                                            <DiscordIcon />
                                        </a>
                                    ) : null}
                                    {item.website !== "" ? (
                                        <a href={item.website} className="flex justify-center items-center">
                                            <EarthIcon />
                                        </a>
                                    ) : null}
                                    {item.github === true ? (
                                        <a href={item.github_repo} className="flex justify-center items-center">
                                            <GithubIcon />
                                        </a>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}