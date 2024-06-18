import { MessageComponentTypes } from "discord-interactions";
import colorConvert from "../../utils/colorConverter";
import type { Embed, EmbedAuthorStructure, EmbedFieldStructure, EmbedFooterStructure, EmbedImageStructure, EmbedThumbnailStructure } from "../discordTypes";

type T = {
    title: string,
    description: string,
    color?: string,
    type?: ("rich" | "image" | "video" | "link"),
}

class DiscordEmbed {
    title: string;
    description: string;
    color: number;
    type: string;
    fileds: Array<EmbedFieldStructure> = [];
    thumbnail: EmbedThumbnailStructure = {
        url: ''
    };
    image: EmbedImageStructure = {
        url: ''
    }
    footer: EmbedFooterStructure = {
        text: '',
    }
    author: EmbedAuthorStructure = {
        name: ''
    }

    constructor({ title, description, color = "#000000", type = "rich" }: T) {
        this.title = title;
        this.description = description;
        this.type = type
        this.color = colorConvert(color);
    }
    // Add field to the embed
    addField(name: string, value: string, inline: boolean = false) {
        const field = {
            name,
            value,
            inline
        }
        this.fileds.push(field)
    }
    // Add thumbnail to the embed
    addThumbnail(url: string, { proxy_url, height, width }: EmbedThumbnailStructure) {
        const thumbnailData = {
            url,
            ...(proxy_url && { proxy_url }),
            ...(height && { height }),
            ...(width && { width })
        }
        this.thumbnail = thumbnailData;
    }
    // Add image to the embed
    addImage(url: string, { proxy_url, height, width }: EmbedImageStructure) {
        const imageData = {
            url,
            ...(proxy_url && { proxy_url }),
            ...(height && { height }),
            ...(width && { width })
        }
        this.image = imageData;
    }
    // Add footer to the embed
    addFooter(text: string, { icon_url, proxy_icon_url }: EmbedFooterStructure) {
        const footerData = {
            text,
            ...(icon_url && { icon_url }),
            ...(proxy_icon_url && { proxy_icon_url }),
        }
        this.footer = footerData;
    }
    // Add author to the embed
    addAuthor(name: string, { url, icon_url, proxy_icon_url }: EmbedAuthorStructure) {
        const authorData = {
            name,
            ...(url && { url }),
            ...(icon_url && { icon_url }),
            ...(proxy_icon_url && { proxy_icon_url }),
        }
        this.author = authorData;
    }

    // Create the embed
    createEmbed() {
        const embedObject: Embed = {
            type: this.type,
            title: this.title,
            description: this.description,
            ...(this.fileds.length > 0 && { fields: this.fileds }),
            ...(this.author.url != '' && { author: this.author }),
            ...(this.footer.text != '' && { footer: this.footer }),
            ...(this.image.url != '' && { image: this.image }),
            ...(this.thumbnail.url != '' && { thumbnail: this.thumbnail }),
        }
        return embedObject;
    }
}

export default DiscordEmbed;