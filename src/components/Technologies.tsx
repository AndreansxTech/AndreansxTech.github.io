import React from 'react';
import { motion } from 'framer-motion';
import { 
    FaNetworkWired, 
    FaMicrochip, 
    FaServer, 
    FaApple, 
    FaShieldAlt,
    FaCloud,
    FaCode,
    FaLinux,
    FaDocker,
    FaWindows,
    FaPython,
    FaJs,
    FaHtml5,
    FaCss3Alt,
    FaCentos,
    FaRaspberryPi,
    FaGithub,
    FaReact,
    FaVuejs,
    FaNodeJs,
    FaDatabase,
    FaRocket,
    FaAws,
    FaMicrosoft
} from 'react-icons/fa';
import { 
    SiMikrotik, 
    SiCloudflare, 
    SiUbuntu,
    SiRaspberrypi,
    SiCisco,
    SiWireshark,
    SiPfsense,
    SiProxmox,
    SiGrafana,
    SiPrometheus,
    SiPaloaltonetworks,
    SiFortinet,
    SiVmware,
    SiOpenstack,
    SiAnsible,
    SiTerraform,
    SiNginx,
    SiApache,
    SiMongodb,
    SiPostgresql,
    SiMysql,
    SiRedis,
    SiGit,
    SiAmazon,
    SiGooglecloud,
    SiKubernetes,
    SiVaadin
} from 'react-icons/si';

const Technologies: React.FC = () => {
    const techItems = [
        { name: "MikroTik", icon: SiMikrotik, color: "#0099ff" },
        { name: "Networking", icon: FaNetworkWired, color: "#8899A6" },
        { name: "Servers", icon: FaServer, color: "#607D8B" },
        { name: "Hardware", icon: FaMicrochip, color: "#5D4037" },
        { name: "Apple", icon: FaApple, color: "#A2AAAD" },
        { name: "Cloudflare", icon: SiCloudflare, color: "#F48120" },
        { name: "Security", icon: FaShieldAlt, color: "#4CAF50" },
        { name: "Cloud", icon: FaCloud, color: "#03A9F4" },
        { name: "Linux", icon: FaLinux, color: "#FCC624" },
        { name: "Docker", icon: FaDocker, color: "#2496ED" },
        { name: "Windows", icon: FaWindows, color: "#0078D6" },
        { name: "Python", icon: FaPython, color: "#3776AB" },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
        { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
        { name: "Ubuntu", icon: SiUbuntu, color: "#E95420" },
        { name: "Raspberry Pi", icon: SiRaspberrypi, color: "#A22846" },
        { name: "Cisco", icon: SiCisco, color: "#1BA0D7" },
        { name: "Wireshark", icon: SiWireshark, color: "#1679A7" },
        { name: "pfSense", icon: SiPfsense, color: "#212121" },
        { name: "Proxmox", icon: SiProxmox, color: "#E57000" },
        { name: "CentOS", icon: FaCentos, color: "#262577" },
        { name: "Grafana", icon: SiGrafana, color: "#F46800" },
        { name: "Prometheus", icon: SiPrometheus, color: "#E6522C" },
        { name: "Network", icon: FaNetworkWired, color: "#84B135" }, // Replaced SiJuniper
        { name: "Server", icon: FaServer, color: "#0088CC" }, // Replaced SiArista
        { name: "Palo Alto", icon: SiPaloaltonetworks, color: "#FA582D" },
        { name: "Fortinet", icon: SiFortinet, color: "#EE3124" },
        { name: "VMware", icon: SiVmware, color: "#607078" },
        { name: "OpenStack", icon: SiOpenstack, color: "#ED1944" },
        { name: "Ansible", icon: SiAnsible, color: "#EE0000" },
        { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
        { name: "NGINX", icon: SiNginx, color: "#009639" },
        { name: "Apache", icon: SiApache, color: "#D22128" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "Redis", icon: SiRedis, color: "#DC382D" },
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "GitHub", icon: FaGithub, color: "#181717" },
        { name: "AWS", icon: SiAmazon, color: "#FF9900" }, // Replaced SiAmazonaws
        { name: "Azure", icon: FaMicrosoft, color: "#0089D6" }, // Replaced SiMicrosoftazure with FaMicrosoft
        { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
        { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "Vue", icon: FaVuejs, color: "#4FC08D" },
        { name: "Node.js", icon: FaNodeJs, color: "#339933" }
    ];

    return (
        <section id="technologies">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <p className="intro" style={{ color: 'var(--accent)', fontFamily: 'var(--font-primary)', marginBottom: '1rem' }}>03. Tools & Technologies</p>
                    <h2 className="fade-up">Technologies I Use & Admire</h2>
                </motion.div>
                
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    style={{ maxWidth: '700px', margin: '0 auto 3rem' }}
                >
                    Here are some of the technologies, platforms, and vendors that shape my learning journey 
                    and infrastructure approach. I'm particularly focused on networking technologies and
                    enterprise-grade solutions.
                </motion.p>
                
                <motion.div 
                    className="tech-grid"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(70px, 1fr))',
                        gap: '15px',
                        maxWidth: '900px',
                        margin: '0 auto'
                    }}
                >
                    {techItems.map((tech, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.02 }}
                            viewport={{ once: true, amount: 0.1 }}
                            whileHover={{ 
                                y: -5,
                                scale: 1.1,
                                transition: { duration: 0.2 }
                            }}
                            title={tech.name}
                            style={{
                                backgroundColor: 'var(--bg-lighter)',
                                borderRadius: '12px',
                                padding: '12px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                aspectRatio: '1/1'
                            }}
                        >
                            {React.createElement(tech.icon as React.ElementType, { 
                                size: 28,
                                color: tech.color
                            })}
                            <span style={{ 
                                fontSize: '10px', 
                                marginTop: '5px', 
                                textAlign: 'center',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                maxWidth: '100%'
                            }}>
                                {tech.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Technologies;