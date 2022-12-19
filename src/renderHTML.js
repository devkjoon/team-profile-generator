// create the team
const generateTeam = team => {

    // create the manager html
    const generateManager = manager => {
        return `
        <div class="col-md-4 managerCard">
                <div class="card p-3 mb-2">
                    <div class="d-flex justify-content-between">
                        <div class="d-flex flex-row align-items-center">
                            <div class="ms-2 c-details">
                                <h6 class="mb-0">${manager.getName()}</h6>
                            </div>
                        </div>
                        <div class="badge"> <span>${manager.getRole()}</span> </div>
                    </div>
                    <div class="mt-5">
                        <p class="managerID">Employee ID: ${manager.getID()}</p>
                        <p class="managerEmail">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
                        <p class="managerSchool">Office Number: ${manager.getOffice()}</p>
                    </div>
                </div>
            </div>
        `;
    };

    // create the html for engineers
    const generateEngineer = engineer => {
        return `
        <div class="col-md-4 engineerCard">
                <div class="card p-3 mb-2">
                    <div class="d-flex justify-content-between">
                        <div class="d-flex flex-row align-items-center">
                            <div class="ms-2 c-details">
                                <h6 class="mb-0">${engineer.getName()}</h6>
                            </div>
                        </div>
                        <div class="badge"> <span>${engineer.getRole()}</span> </div>
                    </div>
                    <div class="mt-5">
                        <p class="engineerID">Employee ID: ${engineer.getID()}</p>
                        <p class="engineerEmail">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
                        <p class="engineerSchool">Github: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></p>
                    </div>
                </div>
            </div>
        `;
    };

    // create the html for interns
    const generateIntern = intern => {
        return `
        <div class="col-md-4 internCard">
                <div class="card p-3 mb-2">
                    <div class="d-flex justify-content-between">
                        <div class="d-flex flex-row align-items-center">
                            <div class="ms-2 c-details">
                                <h6 class="mb-0">${intern.getName()}</h6>
                            </div>
                        </div>
                        <div class="badge"> <span>${intern.getRole()}</span> </div>
                    </div>
                    <div class="mt-5">
                        <p class="internID">Employee ID: ${intern.getID()}</p>
                        <p class="internEmail">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
                        <p class="internSchool">School: ${intern.getSchool()}</p>
                    </div>
                </div>
            </div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

// export function to generate entire page
module.exports = team => {

    return `
    <!DOCTYPE html>
<html>
<head>
  <title>Team Card</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">
  <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div class="container-fluid heading">
        <div class="row">
            <div class="col-12 p-5 mb-3 team-heading">
                <h1 class="text-center toptext">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container mt-5 mb-3">
        <div class="row">
                ${generateTeam(team)}
    </div>
    </div>
</body>
</html>

    `;
};